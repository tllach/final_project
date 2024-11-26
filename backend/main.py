import logging
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
import joblib
import numpy as np

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


logger = logging.getLogger("uvicorn.error")

# Cargar el modelo de Random Forest con manejo de errores
model_path = r"C:\Users\Maria V\Downloads\final_project-master\final_project-master\backend\random_forest_pipeline.pkl"
try:
    model = joblib.load(model_path)
    logger.info("Modelo cargado correctamente.")
except Exception as e:
    logger.error(f"Error al cargar el modelo: {str(e)}")
    raise SystemExit(f"Error crítico: No se pudo cargar el modelo. {str(e)}")

# Formato de datos
class UserInput(BaseModel):
    question1_1: int = Field(..., ge=0, le=2, description="Acceso a la educación")  # Valor entre 0 y 2
    question1_2: int = Field(..., ge=0, le=2)
    question1_3: int = Field(..., ge=0, le=2)
    question2_1: int = Field(..., ge=0, le=2, description="Percepciones de género")
    question2_2: int = Field(..., ge=0, le=2)
    question2_3: int = Field(..., ge=0, le=2)
    question2_4: int = Field(..., ge=0, le=2)
    question3_1: int = Field(..., ge=0, le=2, description="Factores socioeconómicos")
    question3_2: int = Field(..., ge=0, le=2)
    question3_3: int = Field(..., ge=0, le=2)
    question3_4: int = Field(..., ge=0, le=2)

# Preprocesamiento de datos basado en nuestro modelo
def preprocess_input(data: dict):
    # Se definio previamente en el modelo n_features de 11, es decir recibira 11 inputs
    expected_features = ['question1_1', 'question1_2', 'question1_3', 'question2_1', 'question2_2', 
                         'question2_3', 'question2_4', 'question3_1', 'question3_2', 'question3_3', 'question3_4']
    
    filtered_data = [data.get(feature) for feature in expected_features]
    
    # Verificaciones
    if None in filtered_data:
        raise ValueError(f"Faltan datos para las características: {expected_features}")
    
    # Retorna el array procesado
    return np.array([filtered_data])

# Probabilidad
@app.post("/api/calculate")
def calculate(input: UserInput):
    try:
       #procesamiento de respuestas
        inputs = preprocess_input(input.dict())
        
        # Predicción de probabilidades para todas las clases
        prediction = model.predict_proba(inputs)[0]  
        
        
        probability = round(prediction[0] * 100, 2)
        
        return {"probability": probability}
    
    except ValueError as ve:
        # Manejo de errores de entrada
        logger.error(f"Error de entrada: {str(ve)}")
        raise HTTPException(status_code=400, detail=f"Error de entrada: {str(ve)}")
    
    except Exception as e:
        # Manejo de errores generales
        logger.error(f"Error al calcular la probabilidad: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Error al calcular la probabilidad: {str(e)}")
