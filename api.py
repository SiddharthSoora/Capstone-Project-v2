#api
import contextlib
from flask import Flask, request
from flask_cors import CORS, cross_origin

import json

from app.models.question import Question
from app.mcq_generation import MCQGenerator

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

MQC_Generator = MCQGenerator()

@app.route("/")
@cross_origin()
def hello():
    return json.dumps('Welcome to QuizFuse API')


@app.route("/generate-mcq", methods=["POST"])
@cross_origin()
def generate_mcq():
    #postman
    # text = request.form['text']

    requestJson = json.loads(request.data)
    text = requestJson['text']
    count = 10 if requestJson['count'] == '' else int(requestJson['count'])
    
    questions = MQC_Generator.generate_mcq_questions(text, count)
    result = list(map(lambda x: json.dumps(x.__dict__), questions))

    return json.dumps(result)

@app.route("/generate-mcq-image", methods=["POST"])
@cross_origin()
def generate_mcq_image():
    pass

if __name__ == '__main__':
    from werkzeug.serving import run_simple
    run_simple('localhost', 8000, app)
