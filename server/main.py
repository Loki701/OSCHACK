from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from dotenv import load_dotenv
from openai import OpenAI

app = Flask(__name__)
CORS(app)

# Load environment variables from .env file
load_dotenv()

# Set up your OpenAI API key

client = OpenAI(
    # This is the default and can be omitted,
    api_key = os.environ.get('OPENAI_API_KEY')
)

# Endpoint to receive messages from the front-end chatbot
@app.route('/api/chatbot', methods=['POST'])
def chatbot():
    # Ask a question to the model
    
    data = request.json
    user_message = data.get('message')

    response = client.chat.completions.create(
       messages=[
        {
            "role": "assistant",
            "content": user_message,
        }
    ],
    model="gpt-3.5-turbo",
    )
    # Call Llama2 to generate a response
    # bot_response = llama.generate_response(user_message)
    print(response)
    bot_response = response.choices[0].message.content

    return jsonify({'response': bot_response})

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5000)
