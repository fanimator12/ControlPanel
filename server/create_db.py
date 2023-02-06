from database import Base, engine
from models import ControlPanel

print("Creating database ...")

Base.metadata.create_all(engine)