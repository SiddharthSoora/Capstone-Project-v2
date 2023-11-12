# api
import sys
sys.path.append("./imagecap")
from imagecap import image_main
from app.mcq_generation import MCQGenerator
from app.models.question import Question
import json

import contextlib
from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
import cloudinary
import cloudinary.uploader
import os


app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
cloudinary.config(cloud_name="ds9yxk3hu", api_key="334198611226625",
                  api_secret="nKY-u_5yvw1BvKB71mlbQEXpQXw")


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

    questions = MQC_Generator.generate_mcq_questions(text, count)
    result = list(map(lambda x: json.dumps(x.__dict__), questions))

    return json.dumps(result)


@app.route("/upload", methods=['POST'])
def upload_file():

    if request.method == 'POST':
        file_dwn = request.files['file']
        print('Uploading file '+file_dwn.filename)
        app.logger.info('%s file_to_upload', file_dwn)

        if file_dwn:
            file_path = file_dwn.filename
            local_path = "./frontend/public/localstore/"+file_path
            file_dwn.save(local_path)
            print(local_path)
            context = image_main.img_main(local_path)
            questions_image = MQC_Generator.generate_mcq_questions(context, 5)
            result_image = list(
                map(lambda x: json.dumps(x.__dict__), questions_image))
            return json.dumps(result_image)


if __name__ == '__main__':
    from werkzeug.serving import run_simple
    run_simple('localhost', 8000, app)
