import time, traceback
from app import app, db
from flask import request, jsonify
from app.models import User, UserSchema, user_schema, users_schema #delete?
from sqlalchemy.exc import IntegrityError
from app.dao.user_dao import UserRegistration
from werkzeug.utils import secure_filename
import os
import imghdr

def validate_image(stream):
    header = stream.read(512)
    stream.seek(0)
    format = imghdr.what(None, header)
    # import pdb; pdb.set_trace()
    if not format:
        return None
    return '.' + (format)

@app.route('/register', methods=['GET', 'POST'])
def register():
    # Get request data
    data = request.get_json(force=True, silent=True)
    add_user = UserRegistration.register(data=data)
    return add_user


@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'GET':
        return {"msg": "Welcome"}, 200
    data = request.get_json()
    # email = data['email']
    return jsonify(data)

@app.route('/users', methods=['GET', 'POST'])
def list_users():
    users = User.query.all()
    user_list = users_schema.dump(users)
    data = request.get_json()
    # email = data['email']
    return jsonify(user_list)

@app.route('/user', methods=['GET', 'POST'])
def get_user():
    id = 1
    result = User.query.get(id)
    user = user_schema.dump(result)
    data = request.get_json()
    # email = data['email']
    return jsonify(user)

@app.route('/upload', methods=['GET', 'POST'])

# def allowed_file(filename):
#     return '.' in filename and filename.rsplit('. ',1)[1].lower() in ALLOWED_EXTENTIONS

def upload_file():
    if 'file' not in request.files:
        return 400
    file_data = request.files['file']
    filename = secure_filename(file_data.filename)
    if filename != '':
        file_location = os.path.join(app.config['UPLOAD_PATH'], filename)
        file_ext = os.path.splitext(filename)[1]
        if file_ext not in app.config['IMAGE_EXTENSIONS'] or file_ext != validate_image(file_data.stream):
            return 400
        file_data.save(file_location)
    return {"image_location" : file_location}
