
from app import app, db
from app.models import User, UserSchema, user_schema, users_schema
from sqlalchemy.exc import IntegrityError
from datetime import datetime
from flask import request, jsonify



class UserRegistration:
    def __init__(self, data):
        self.data = data
        # self.email = data['email']
        # self.password_hash = data['password']
        # self.first_name = data['first_name']
        # self.last_name = data['last_name']
        # self.created = datetime.now()

    def register(data):
        email = data['email']
        password_hash = data['password']
        first_name = data['first_name']
        last_name = data['last_name']
        created = datetime.now()
        try:
            new_user = User(first_name,last_name, email, password_hash, created)
            db.session.add(new_user)
            db.session.commit()
            return user_schema.jsonify(new_user), 201
        except Exception as e:
            db.session.rollback()
            return("Failed - User Already Exists"), 400


