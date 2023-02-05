from typing import Optional, List
from fastapi import FastAPI, HTTPException, status
from pydantic import BaseModel
from database import SessionLocal
import models

app = FastAPI()

db = SessionLocal()


class ParameterClass:
    def __init__(self, *, type: str, parameterA: int, parameterB: int, parameterC: int, parameterD: int, parameterE: int):
        self.type = type
        self.parameterA = parameterA
        self.parameterB = parameterB
        self.parameterC = parameterC
        self.parameterD = parameterD
        self.parameterE = parameterE


class ControlPanelClass:
    def __init__(self, *, id: int, name: str, parameterType: str, parameters: List[ParameterClass] = None):
        self.id = id
        self.name = name
        self.parameterType = parameterType
        self.parameters = parameters

# Serializers


class Parameter(BaseModel):
    type: str
    parameterA: int
    parameterB: int
    parameterC: int
    parameterD: int
    parameterE: int

    class Config:
        orm_mode = True


class ControlPanel(BaseModel):
    id: int
    name: str
    parameterType: str
    parameters: List[Parameter] = None

    class Config:
        orm_mode = True

# CREATE NEW CONTROL PANEL


@app.post("/controlpanels", response_model=ControlPanel, status_code=status.HTTP_201_CREATED)
def create_control_panel(controlpanel: ControlPanel):
    new_panel = models.ControlPanel(
        name=controlpanel.name,
        parameterType=controlpanel.parameterType,
        parameters=controlpanel.parameters
    )

    db_item = db.query(models.ControlPanel).filter(
        models.ControlPanel.name == new_panel.name).first()

    if db_item is not None:
        raise HTTPException(
            status_code=400, detail="Control Panel already exists.")

    db.add(new_panel)
    db.commit()

    return new_panel

# GET CONTROL PANEL


@app.get("/controlpanels/{controlpanel_id}", response_model=ControlPanel, status_code=status.HTTP_200_OK)
def get_control_panel(controlpanel_id: int):
    controlpanel = db.query(models.ControlPanel).filter(
        models.ControlPanel.id == controlpanel_id).first()
    return controlpanel

# GET ALL CONTROL PANELS


@app.get("/controlpanels", response_model=List[ControlPanel], status_code=200)
def get_all_control_panels():
    return db.query(models.ControlPanel).all()

# UPDATE CONTROL PANEL


@app.put("/controlpanels/{controlpanel_id}", response_model=ControlPanel, status_code=status.HTTP_200_OK)
def update_control_panel(controlpanel_id: int, controlpanel: ControlPanel):
    updated_panel = db.query(models.ControlPanel).filter(
        models.ControlPanel.id == controlpanel_id).first()
    updated_panel.name = controlpanel.name
    updated_panel.parameterType = controlpanel.parameterType
    updated_panel.parameters = controlpanel.parameters

    db.commit()

    return updated_panel

# REMOVE EXISTING CONTROL PANEL


@app.delete("/controlpanels")
def delete_control_panel(controlpanel_id: int):
    deleted_panel = db.query(models.ControlPanel).filter(
        models.ControlPanel.id == controlpanel_id).first()

    if deleted_panel is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail="Control Panel not found.")

    db.delete(deleted_panel)
    db.commit()

    return deleted_panel