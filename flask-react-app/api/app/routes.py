import time
from app import app
from flask import request, jsonify

@app.route('/sign_in', methods=['GET', 'POST'])
def sign_in():
    data = request.get_json(force=True, silent=True)
    email = data['email']
    password = data['password']
    return jsonify(email,password)
