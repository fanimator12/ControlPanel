from typing import Optional, List
from fastapi import FastAPI, Path, Query, HTTPException, status
from pydantic import BaseModel
from database import SessionLocal
import models

app = FastAPI()

db = SessionLocal()

class ControlPanelClass:
    def __init__(self, *, name: str, parameterA: int = None, parameterB: int = None, parameterC: int = None, parameterD: int = None, parameterE: int = None):
        self.name: name
        self.parameterA: parameterA
        self.parameterB: parameterB
        self.parameterC: parameterC
        self.parameterD: parameterD
        self.parameterE: parameterE

# Serializer
class ControlPanel(BaseModel):
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
    new = models.ControlPanel(
        name = controlpanel.name,
        parameterA = controlpanel.parameterA,
        parameterB = controlpanel.parameterB,
        parameterC = controlpanel.parameterC,
        parameterD = controlpanel.parameterD,
        parameterE = controlpanel.parameterE
    )

    db.add(new)
    db.commit()
    
    return new

# GET CONTROL PANEL
@app.get("/controlpanels/{controlpanel_id}")
def get_control_panel(controlpanel_id: int = Path(None, description = "The ID of a given control panel")):
    for controlpanel_id in db:
        return db[controlpanel_id].name
    raise HTTPException(status_code = 404, detail = "Control Panel not found.")

# GET ALL CONTROL PANELS
@app.get("/controlpanels", response_model = List[ControlPanel], status_code=200)
def get_all_control_panels():
    return db.query(models.ControlPanel).all()
    raise HTTPException(status_code = 404, detail = "Control Panels are not found.")

# UPDATE CONTROL PANEL
@app.put("/controlpanels/{controlpanel_id}")
def get_control_panel(controlpanel_id: int = Path(None, description = "The ID of a given control panel")):
    for controlpanel_id in db:
        return db[controlpanel_id].name
    raise HTTPException(status_code = 404, detail = "Control Panel not found.")

# REMOVE EXISTING CONTROL PANEL
@app.delete("/controlpanels")
def delete_control_panel(controlpanel_id: int = Query(..., description = "The ID of removable Control Panel", gt=0)):
    if controlpanel_id not in db:
        raise HTTPException(status_code = 404, detail = "Control Panel doesn't exist.")

    del db[controlpanel_id]
    return {"Success": "Control Panel successfully removed."}