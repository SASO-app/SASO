from fastapi import FastAPI, UploadFile, File
from fastapi.responses import JSONResponse

app = FastAPI()

@app.post("/upload/")
async def upload(file: UploadFile = File(...)):
    return {"filename": file.filename}
    
from fastapi import FastAPI, File, UploadFile
from fastapi.responses import HTMLResponse

app = FastAPI()

@app.get("/", response_class=HTMLResponse)
async def root():
    return """
    <h2>🧾 Receipt OCR API is running</h2>
    <p>Use <code>/upload</code> to send receipt images.</p>
    """
