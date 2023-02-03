from typing import Optional
from fastapi import FastAPI, Path, Query, HTTPException, status
from pydantic import BaseModel

app = FastAPI()

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

controlpanels = {}

# CREATE NEW CONTROL PANEL
@app.post("/create-controlpanel/{controlpanel_id}")
def create_control_panel(controlpanel_id: int, controlpanel: ControlPanel):
    if controlpanel_id in controlpanels:
        raise HTTPException(status_code=400, detail="Control Panel already exists.")

    controlpanels[controlpanel_id] = controlpanel
    return controlpanels[controlpanel_id]

# GET CONTROL PANEL
@app.get("/get-controlpanel/{controlpanel_id}")
def get_control_panel(controlpanel_id: int = Path(None, description="The ID of a given control panel")):
    for controlpanel_id in controlpanels:
        return controlpanels[controlpanel_id].name
    raise HTTPException(status_code=404, detail="Control Panel not found.")

# GET LIST OF CONTROL PANELS
@app.get("/get-controlpanels")
def get_control_panels():
    for controlpanel_id in controlpanels:
        return controlpanels[controlpanel_id].name
    raise HTTPException(status_code=404, detail="Control Panels are not found.")

# GET CONTROL PANEL BY NAME
@app.get("/get-controlpanel-by-name")
def get_control_panel_by_name(name: str = Query(None, title="Name", description="Name of the Control Panel")):
    for controlpanel_id in controlpanels:
        if controlpanels[controlpanel_id].name == name:
            return controlpanels[controlpanel_id]
    raise HTTPException(status_code=404, detail="Control Panel not found.")

# REMOVE EXISTING CONTROL PANEL
@app.delete("/delete-controlpanel")
def delete_control_panel(controlpanel_id: int = Query(..., description="The ID of removable Control Panel", gt=0)):
    if controlpanel_id not in controlpanels:
        raise HTTPException(status_code=404, detail="Control Panel doesn't exist.")

    del controlpanels[controlpanel_id]
    return {"Succes": "Control Panel succesfully removed."}