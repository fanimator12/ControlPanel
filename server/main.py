from enum import Enum
from typing import Optional, List
from fastapi import FastAPI, HTTPException, status, Request
from pydantic import BaseModel
from database import SessionLocal
import models

app = FastAPI()

db = SessionLocal()

class Parameter(str, Enum):
    A = 'A'
    B = 'B'
    C = 'C'
    D = 'D'
    E = 'E'

# class ParameterClass:
#     def __init__(self, *, A: Optional[int], B: Optional[int], C: Optional[int], D: Optional[int], E: Optional[int]):
#         self.A = A
#         self.B = B
#         self.C = C
#         self.D = D
#         self.E = E

class ControlPanelClass:
    def __init__(self, *, id: int, name: str, A: Optional[int], B: Optional[int], C: Optional[int], D: Optional[int], E: Optional[int]
    # parameters=List[ParameterClass]
    ):
        self.id = id
        self.name = name
        self.A = A
        self.B = B
        self.C = C
        self.D = D
        self.E = E
        # self.parameters = parameters

# Serializers

# class Parameter(BaseModel):
#     A: Optional[int]
#     B: Optional[int]
#     C: Optional[int]
#     D: Optional[int]
#     E: Optional[int]

#     class Config:
#         orm_mode = True


class ControlPanel(BaseModel):
    id: int
    name: str
    A: Optional[int] = None
    B: Optional[int] = None
    C: Optional[int] = None
    D: Optional[int] = None
    E: Optional[int] = None
    # parameters: List[Parameter]

    class Config:
        orm_mode = True

# CREATE NEW CONTROL PANEL


@app.post("/controlpanel", response_model=ControlPanel, status_code=status.HTTP_201_CREATED)
def create_control_panel(controlpanel: ControlPanel):
    new_panel = models.ControlPanel(
        id=controlpanel.id,
        name=controlpanel.name,
        A=controlpanel.A,
        B=controlpanel.B,
        C=controlpanel.C,
        D=controlpanel.D,
        E=controlpanel.E,
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


@app.get("/controlpanel/{name}", response_model=ControlPanel, status_code=status.HTTP_200_OK)
def get_control_panel(name: str):
    controlpanel = db.query(models.ControlPanel).filter(
        models.ControlPanel.name == name).first()
    return controlpanel

# GET PARAMETER


@app.get("/controlpanel/{name}/{param}", response_model=ControlPanel, status_code=status.HTTP_200_OK)
def get_parameter(name: str, param: Parameter):
    controlpanel = db.query(models.ControlPanel).filter(
        models.ControlPanel.name == name).first()

    if param is Parameter.A:
        return {"A": param}
    if param is Parameter.B:
        return {"B": param}
    if param is Parameter.C:
        return {"C": param}
    if param is Parameter.D:
        return {"D": param}
    if param is Parameter.E:
        return {"E": param}

# SET PARAMETER


@app.put("/controlpanel/{name}/{param}", response_model=ControlPanel, status_code=status.HTTP_200_OK)
def update_parameter(name:str, param:Parameter):
    controlpanel = db.query(models.ControlPanel).filter(
        models.ControlPanel.name == name).first()

    if param is Parameter.A:
        controlpanel.A = param.A
        return {"A": param}
    if param is Parameter.B:
        controlpanel.B = param.B
        return {"B": param}
    if param is Parameter.C:
        controlpanel.C = param.C
        return {"C": param}
    if param is Parameter.D:
        controlpanel.D = param.D
        return {"D": param}
    if param is Parameter.E:
        controlpanel.E = param.E
        return {"E": param}

    db.commit()

    return param


# GET ALL CONTROL PANELS


@app.get("/controlpanel", response_model=List[ControlPanel], status_code=200)
def get_all_control_panels():
    return db.query(models.ControlPanel).all()

# UPDATE CONTROL PANEL


@app.put("/controlpanel/{name}", response_model=ControlPanel, status_code=status.HTTP_200_OK)
def update_control_panel(name: str, controlpanel: ControlPanel):
    updated_panel = db.query(models.ControlPanel).filter(
        models.ControlPanel.name == name).first()
    updated_panel.name = controlpanel.name
    updated_panel.A = controlpanel.A
    updated_panel.B = controlpanel.B
    updated_panel.C = controlpanel.C
    updated_panel.D = controlpanel.D
    updated_panel.E = controlpanel.E

    db.commit()

    return updated_panel

# REMOVE EXISTING CONTROL PANEL


@app.delete("/controlpanel")
def delete_control_panel(name: str):
    deleted_panel = db.query(models.ControlPanel).filter(
        models.ControlPanel.name == name).first()

    if deleted_panel is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail="Control Panel not found.")

    db.delete(deleted_panel)
    db.commit()

    return deleted_panel
