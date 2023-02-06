from database import Base
from sqlalchemy import String, Integer, Column

class ControlPanel(Base):
    __tablename__ = 'controlpanel'
    id = Column(Integer, primary_key=True, nullable=False)
    name = Column(String, nullable = False)
    A = Column(Integer)
    B = Column(Integer)
    C = Column(Integer)
    D = Column(Integer)
    E = Column(Integer)

    def __init__(self, id, name, A, B, C, D, E):
        self.id = id
        self.name = name
        self.A = A
        self.B = B
        self.C = C
        self.D = D
        self.E = E

    def __repr__(self):
        return f"<ControlPanel id={self.id} name={self.name} A={self.A} B={self.B} C={self.C} D={self.D} E={self.E}>"