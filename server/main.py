from flask import Flask, request, jsonify
from flask_cors import CORS
# from llama2 import Llama

app = Flask(__name__)
CORS(app)
# Initialize Llama2
# llama = Llama()

# Endpoint to receive messages from the front-end chatbot
@app.route('/api/chatbot', methods=['POST'])
def chatbot():
    data = request.json
    user_message = data.get('message')

    # Call Llama2 to generate a response
    # bot_response = llama.generate_response(user_message)
    bot_response = 'Hello from the server!'

    return jsonify({'response': bot_response})

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5000)
