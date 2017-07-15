
from flask import Flask, render_template, request, redirect, session

app = Flask(__name__)
app.secret_key = 'ThisIsSecret'

@app.route('/')
def index():
  return render_template('index.html')

@app.route('/process', methods=['POST'])
def process():
  session['counter'] =  session['counter'] + 1
  print session['counter']
  return render_template('index.html', counter = session['counter'])


app.run(debug=True)
