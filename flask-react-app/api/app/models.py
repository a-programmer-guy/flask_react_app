from werkzeug.security import generate_password_hash, check_password_hash
from datetime import datetime
from app import db, login, ma
from flask_login import UserMixin
from marshmallow_sqlalchemy import SQLAlchemySchema, auto_field

@login.user_loader
def load_user(id):
    return User.query.get(int(id))

class User(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(64))
    last_name = db.Column(db.String(64))
    # gender = db.Column(db.String(6))
    # dob = db.Column(db.DateTime, default=datetime.utcnow)
    email = db.Column(db.String(120), index=True, unique=True)
    password_hash = db.Column(db.String(128))
    created = db.Column(db.DateTime, index=True, default=datetime.utcnow)

    def __init__(self, first_name, last_name, email, password_hash, created):
        self.fist_name = first_name
        self.last_name = last_name
        self.email = email
        self.password_hash = password_hash
        self.created = created

    def __repr__(self):
        return '<User {}>'.format(self.username)

    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)

# User Schema (marshmellow)
class UserSchema(ma.Schema):
    class Meta:
        fields =('id','first_name', 'last_name', 'email', 'password_hash', 'created')

#Init Schema from flask_marshmallow import Marshmallow
user_schema = UserSchema()
users_schema = UserSchema(many=True)


class Post(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    body = db.Column(db.String(140))
    timestamp = db.Column(db.DateTime, index=True, default=datetime.utcnow)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))

    def __repr__(self):
        return '<Post {}>'.format(self.body)