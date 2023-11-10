# api
import sys
import contextlib
from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
import cloudinary
import cloudinary.uploader
import os


import json

from app.models.question import Question
from app.mcq_generation import MCQGenerator

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
    # postman
    # text = request.form['text']

    # Sendinf JSON ->API -> Return JSON 

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


@app.route("/upload", methods=['POST'])
def upload_file():

    upload_result = None

    if request.method == 'POST':
        file_to_upload = request.files['file']
        print('Uploading file '+file_to_upload.filename)
        app.logger.info('%s file_to_upload', file_to_upload)

        if file_to_upload:
            file_path = file_to_upload.filename
            file_to_upload.save("./frontend/public/localstore/"+file_path)
            # upload_result = cloudinary.uploader.upload(file_to_upload)
            # app.logger.info(upload_result)
            # image_res = jsonify(upload_result)
            # print(image_res)
            return jsonify({'status': 'success', 'file_path': file_path})


if __name__ == '__main__':
    from werkzeug.serving import run_simple
    run_simple('localhost', 8000, app)
