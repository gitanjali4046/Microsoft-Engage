from flask import Flask, flash, request, redirect, url_for, render_template, jsonify
# from itsdangerous import json
from numpy import require
from werkzeug.utils import secure_filename
import engage

## Everything is module

app = Flask(__name__)
app.config['MAX_CONTENT_PATH'] = "10000000"

## app.route is a decorator which bind with index function 
## When user hit to the http://127.0.0.1:5000/ then decorator execute the index function
@app.route("/", methods=['GET'])
def index():
    # engage.frstart()
    return render_template("index.html") ##render template rendering and displaying the indexed html file


## When user will click on start-camera button then uploader file will execute 
## In this front-end send the request to flask with video file we are storing that in object here.
## And then we are saving on flask serever for video processing. 
@app.route("/uploader", methods = ['POST'])
def uploader():
    f = request.files['video']
    f.save(secure_filename("videoname.webm"))
    import os  
    # os.rename('videoname', 'videoname.webm')
    try:
        name = engage.frstart() ## This is an engage module in this we create a frstart function at the end which is return a name. 
    except:
        name = "Person doesn't recognized" ## If it not return name then it set "Person doesn't recognized" in name. 
    print(name)
    return jsonify(name) ## In front-end it return name in form of Json format. 
app.run() ## This starting point when we creating main.py in python  then it create a flask and run it. 