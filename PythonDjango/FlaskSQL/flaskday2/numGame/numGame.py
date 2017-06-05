
from flask import Flask, render_template, request, redirect, session
import random

app = Flask(__name__)
app.secret_key = 'ThisIsSecret'

@app.route('/')
def index():
  newRand()
  print session['randomNum']
  return render_template('index.html')

@app.route('/process', methods=['POST'])
def process():
  userNumber = request.form['number']
  print session['randomNum']
  print userNumber + " User"
  good = ""
  if int(userNumber) == int(session['randomNum']):
      good = "Nice one"
  else:
      good = "Nope try again"
  return render_template('good.html', thisnumber = session['randomNum'], resultString = good)

def newRand():
  session['randomNum'] = random.randint(1,100)

app.run(debug=True)
