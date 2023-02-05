from database import Base
from sqlalchemy import String, Integer, Column, ForeignKey
from sqlalchemy.orm import relationship

class Parameter(Base):
    __tablename__ = 'parameters'
    id = Column(Integer, ForeignKey('controlpanel.id'), primary_key=True)
    parameterA = Column(Integer)
    parameterB = Column(Integer)
    parameterC = Column(Integer)
    parameterD = Column(Integer)
    parameterE = Column(Integer)

    def __init__(self, parameterA, parameterB, parameterC, parameterD, parameterE):
        self.parameterA = parameterA
        self.parameterB = parameterB
        self.parameterC = parameterC
        self.parameterD = parameterD
        self.parameterE = parameterE

    def __repr__(self):
        return f"<Parameter parameterA={self.parameterA} parameterB={self.parameterB} parameterC={self.parameterC} parameterD={self.parameterD} parameterE={self.parameterE}>"

class ControlPanel(Base):
    __tablename__ = 'controlpanel'
    id = Column(Integer, primary_key=True, nullable=False)
    name = Column(String, nullable = False)
    parameters = relationship("Parameter", backref="parameters")

    def __init__(self, id, name, parameters):
        self.id = id
        self.name = name
        self.parameters = map(Parameter, parameters)

    def __repr__(self):
        return f"<ControlPanel id={self.id} name={self.name} parameters={self.parameters}>"