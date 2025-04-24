# app/database.py
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base

# URL do banco de dados
SQLALCHEMY_DATABASE_URL = "mysql+pymysql://root:12345678@localhost:3306/banco_de_dados"  # <- troque a senha aqui

engine = create_engine(SQLALCHEMY_DATABASE_URL)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()