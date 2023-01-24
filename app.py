# install libraries ---
# pip install fastapi uvicorn 

# 1. Library imports
import uvicorn
from fastapi import FastAPI

from fastapi.middleware.cors import CORSMiddleware
import pickle

# 2. Create the app object
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 3. load the model
rgModel = pickle.load(open("rfc.pkl", "rb"))

# 4. Index route, opens automatically on http://127.0.0.1:8000
@app.get('/')
def index():
    return {'message': 'Hello, World'}

@app.get("/predictOutcome")
def gePredictOutcome(Pregnancies: int, Glucose: int, BloodPressure: int,SkinThickness: int ,Insulin: int ,BMI: float ,DiabetesPedigreeFunction: float ,Age: int ):

    prediction = rgModel.predict([[Pregnancies,Glucose,BloodPressure,SkinThickness,Insulin,BMI,DiabetesPedigreeFunction,Age]])
    val = prediction[0];
    print(val);
    # return {'Outcome': val}
    return {'message': str(val)}

# 5. Run the API with uvicorn
if __name__ == '__main__':
    uvicorn.run(app, port=80, host='0.0.0.0')
    
# uvicorn app:app --host 0.0.0.0 --port 80
# http://127.0.0.1/predictOutcome?Pregnancies=0&Glucose=137&BloodPressure=40&SkinThickness=35&Insulin=168&BMI=43.1&DiabetesPedigreeFunction=2.228&Age=33

                                                   