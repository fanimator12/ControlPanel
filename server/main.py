from typing import Optional, List
from datetime import datetime
from fastapi import FastAPI, HTTPException, status
from pydantic import BaseModel
from database import SessionLocal
import models

app = FastAPI()

db = SessionLocal()


class ParameterClass:
    def __init__(self, *, parameterA: int, parameterB: int, parameterC: int, parameterD: int, parameterE: int):
        self.parameterA = parameterA
        self.parameterB = parameterB
        self.parameterC = parameterC
        self.parameterD = parameterD
        self.parameterE = parameterE


class ControlPanelClass:
    def __init__(self, *, id: int, name: str, parameters: List[ParameterClass] = None):
        self.id = id
        self.name = name
        self.parameters = parameters

# Serializers


class Parameter(BaseModel):
    parameterA: Optional[int]
    parameterB: Optional[int]
    parameterC: Optional[int]
    parameterD: Optional[int]
    parameterE: Optional[int]

    class Config:
        orm_mode = True


class ControlPanel(BaseModel):
    id: int
    name: str
    parameters: List[Parameter] = None

    class Config:
        orm_mode = True

# CREATE NEW CONTROL PANEL


@app.post("/controlpanels", response_model=ControlPanel, status_code=status.HTTP_201_CREATED)
def create_control_panel(controlpanel: ControlPanel):
    new_panel = models.ControlPanel(
        id=controlpanel.id,
        name=controlpanel.name,
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