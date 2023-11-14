# api
import sys
sys.path.append("./imagecap")
import warnings
from imagecap import image_main
from app.mcq_generation import MCQGenerator
from app.models.question import Question
import json
import contextlib
from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
import os
warnings.filterwarnings("ignore", category=UserWarning)


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
    requestJson = json.loads(request.data)
    text = requestJson['text']
    count = 10 if requestJson['count'] == '' else int(requestJson['count'])
    print("API Text ---> Starting Text Processing")
    questions = MQC_Generator.generate_mcq_questions(text, count)
    result = list(map(lambda x: json.dumps(x.__dict__), questions))
    print("API Text ---> Text Processing Completed")

    return json.dumps(result)


@app.route("/upload", methods=['POST'])
def upload_file():
    print("API ---> Welcome to QuizFuse API")
    print("API ---> Starting ...")

    if request.method == 'POST':
        file_dwn = request.files['file']
        print("API Image ---> Starting Image Processing")
        print('API Image ---> Uploading file '+file_dwn.filename)
        app.logger.info('%s file_to_upload', file_dwn)

        if file_dwn:
            file_path = file_dwn.filename
            local_path = "./frontend/public/localstore/"+file_path
            file_dwn.save(local_path)
            print("API Image ---> Done Uploading")
            context = image_main.img_main(local_path)
            questions_image = MQC_Generator.generate_mcq_questions(context, 5)
            result_image = list(
                map(lambda x: json.dumps(x.__dict__), questions_image))
            print("API Image ---> Image Processing Completed")
            return json.dumps(result_image)


if __name__ == '__main__':
    from werkzeug.serving import run_simple
    run_simple('localhost', 8000, app)
