from database import Base
from datetime import datetime
from sqlalchemy import String, ForeignKey, Integer, Column, DateTime
from sqlalchemy.orm import relationship

# class Parameter(Base):
#     __tablename__ = 'parameter'
#     name = Column(String, primary_key=True, nullable=False)
#     A = Column(Integer)
#     B = Column(Integer)
#     C = Column(Integer)
#     D = Column(Integer)
#     E = Column(Integer)
#     id = Column(Integer(), ForeignKey("controlpanel.id"))

#     def __init__(self, A, B, C, D, E):
#         self.A = A
#         self.B = B
#         self.C = C
#         self.D = D
#         self.E = E

#     def __repr__(self):
#         return f"<Parameter A={self.A} B={self.B} C={self.C} D={self.D} E={self.E}>"

class ControlPanel(Base):
    __tablename__ = 'controlpanel'
    id = Column(Integer, primary_key=True, nullable=False)
    name = Column(String, default=datetime.utcnow, nullable = False)
    A = Column(Integer)
    B = Column(Integer)
    C = Column(Integer)
    D = Column(Integer)
    E = Column(Integer)
    # parameters = relationship("Parameter", backref="controlpanel")

    def __init__(self, id, name, A, B, C, D, E
    # parameters
    ):
        self.id = id
        self.name = name
        self.A = A
        self.B = B
        self.C = C
        self.D = D
        self.E = E
        # self.parameters = parameters

    def __repr__(self):
        return f"<ControlPanel name={self.name}>"