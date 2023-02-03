from database import Base
from sqlalchemy import String, Integer, Column

class ControlPanel(Base):
    __tablename__='controlpanels'
    id=Column(Integer, primary_key=True)
    name=Column(String(255), nullable=False, unique=True)
    parameterA=Column(Integer)
    parameterB=Column(Integer)
    parameterC=Column(Integer)
    parameterD=Column(Integer)
    parameterE=Column(Integer)

    def __repr__(self):
        return f"<ControlPanel name={self.name} parameterA={self.parameterA} parameterB={self.parameterB} parameterC={self.parameterC} parameterD={self.parameterD} parameterE={self.parameterE}>"