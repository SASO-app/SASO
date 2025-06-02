from fastapi import FastAPI, UploadFile, File
from fastapi.responses import JSONResponse

app = FastAPI()

@app.post("/upload/")
async def upload(file: UploadFile = File(...)):
    return {"filename": file.filename}
