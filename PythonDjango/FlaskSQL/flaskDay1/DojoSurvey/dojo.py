
from flask import Flask, render_template, request, redirect

app = Flask(__name__)

@app.route('/')
def index():
  return render_template('index.html')

@app.route('/result', methods=['POST'])
def result():
  fname = request.form['fname']
  lname = request.form['lname']
  print fname
  print lname
  return render_template('result.html', fname = fname, lname = lname)


app.run(debug=True)
