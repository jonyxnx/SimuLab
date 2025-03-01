from fastapi import FastAPI, File, UploadFile
from fastapi.responses import JSONResponse
import pandas as pd
import io
import numpy as np

app = FastAPI()

@app.post("/upload/")
async def upload_file(file: UploadFile = File(...)):
 
    file_content = await file.read()
    df = pd.read_csv(io.BytesIO(file_content))

    return JSONResponse(content={"result": result, "filename": file.filename})
