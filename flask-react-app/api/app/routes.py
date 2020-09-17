import time, traceback
from app import app, db
from flask import request, jsonify
from app.models import User, UserSchema, user_schema, users_schema #delete?
from sqlalchemy.exc import IntegrityError
from app.dao.user_dao import UserRegistration

@app.route('/register', methods=['GET', 'POST'])
def register():
    # Get request data
    data = request.get_json(force=True, silent=True)
    add_user = UserRegistration.register(data=data)
    return add_user


@app.route('/login', methods=['GET', 'POST'])
def login():
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