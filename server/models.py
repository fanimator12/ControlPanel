from database import Base
from sqlalchemy import String, Integer, Column, ForeignKey, CHAR
from sqlalchemy.orm import relationship

class Parameter(Base):
    __tablename__ = 'parameter'
    parameter = Column(String, ForeignKey('controlpanel.parameter'), primary_key=True)
    value = Column(Integer)

    def __init__(self, parameter, value):
        self.parameter = parameter
        self.value = value

    def __repr__(self):
        return f"<Parameter parameter={self.parameter} value={self.value}>"

class ControlPanel(Base):
    __tablename__ = 'controlpanel'
    id = Column(Integer, primary_key=True, nullable=False)
    parameter = Column(CHAR, unique=True)
    parameters = relationship("Parameter", backref="parameter")

    def __init__(self, id, parameter):
        self.id = id
        self.parameter = map(Parameter, parameter)

    def __repr__(self):
        return f"<ControlPanel id={self.id} parameter={self.parameter}>"