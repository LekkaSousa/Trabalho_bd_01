# app/schemas.py
from pydantic import BaseModel

class UsuarioBase(BaseModel):
    nome: str
    email: str
    senha: str

class UsuarioCreate(UsuarioBase):
    pass

class Usuario(UsuarioBase):
    id: int

    class Config:
        orm_mode = True