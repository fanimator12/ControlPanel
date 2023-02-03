from typing import Optional, List
from fastapi import FastAPI, Path, Query, HTTPException, status
from pydantic import BaseModel
from database import SessionLocal
import models

app = FastAPI()

db = SessionLocal()

class ControlPanelClass:
    def __init__(self, *, id: int, name: str, parameterA: int = None, parameterB: int = None, parameterC: int = None, parameterD: int = None, parameterE: int = None):
        self.id = id
        self.name: name
        self.parameterA: parameterA
        self.parameterB: parameterB
        self.parameterC: parameterC
        self.parameterD: parameterD
        self.parameterE: parameterE

# Serializer
class ControlPanel(BaseModel):
    id: int
    name: str
    parameterA: Optional[int] = None
    parameterB: Optional[int] = None
    parameterC: Optional[int] = None
    parameterD: Optional[int] = None
    parameterE: Optional[int] = None

    class Config:
        orm_mode = True

# CREATE NEW CONTROL PANEL
@app.post("/controlpanels", response_model = ControlPanel, status_code = status.HTTP_201_CREATED)
def create_control_panel(controlpanel: ControlPanel):
    new_panel = models.ControlPanel(
        name = controlpanel.name,
        parameterA = controlpanel.parameterA,
        parameterB = controlpanel.parameterB,
        parameterC = controlpanel.parameterC,
        parameterD = controlpanel.parameterD,
        parameterE = controlpanel.parameterE
    )

    db_item = db.query(models.ControlPanel).filter(models.ControlPanel.name==new_panel.name).first()

    if db_item is not None:
        raise HTTPException(status_code = 400, detail = "Control Panel already exists.")
    
    db.add(new_panel)
    db.commit()
    
    return new_panel

# GET CONTROL PANEL
@app.get("/controlpanels/{controlpanel_id}", response_model = ControlPanel, status_code = status.HTTP_200_OK)
def get_control_panel(controlpanel_id: int):
    controlpanel = db.query(models.ControlPanel).filter(models.ControlPanel.id == controlpanel_id).first()
    return controlpanel

# GET ALL CONTROL PANELS
@app.get("/controlpanels", response_model = List[ControlPanel], status_code = 200)
def get_all_control_panels():
    return db.query(models.ControlPanel).all()

# UPDATE CONTROL PANEL
@app.put("/controlpanels/{controlpanel_id}", response_model = ControlPanel, status_code = status.HTTP_200_OK)
def update_control_panel(controlpanel_id: int, controlpanel: ControlPanel):
    updated_panel = db.query(models.ControlPanel).filter(models.ControlPanel.id == controlpanel_id).first()
    updated_panel.name = controlpanel.name
    updated_panel.parameterA = controlpanel.parameterA
    updated_panel.parameterB = controlpanel.parameterB
    updated_panel.parameterC = controlpanel.parameterC
    updated_panel.parameterD = controlpanel.parameterD
    updated_panel.parameterE = controlpanel.parameterE

    db.commit()

    return updated_panel

# REMOVE EXISTING CONTROL PANEL
@app.delete("/controlpanels")
def delete_control_panel(controlpanel_id: int = Query(..., description = "The ID of removable Control Panel", gt=0)):
    if controlpanel_id not in db:
        raise HTTPException(status_code = 404, detail = "Control Panel doesn't exist.")

    del db[controlpanel_id]
    return {"Success": "Control Panel successfully removed."}