
from flask import Flask, render_template, request, redirect

app = Flask(__name__)

@app.route('/')
def index():
  return render_template('index.html')

@app.route('/ninja')
def ninja():
  return render_template('ninja.html')

@app.route('/ninja/<color>')
def ninjacolor(color):
  print str(color)
  if(str(color) == "blue" or str(color) == "red" or str(color) == "purple" or str(color) == "orange"):
    return render_template((color + '.html'))
  else:
    return render_template(('nocolor.html'))

app.run(debug=True)
