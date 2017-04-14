
from flask import Flask, render_template, request, redirect, session, flash

app = Flask(__name__)
app.secret_key = 'ThisIsSecret'

@app.route('/')
def index():
  return render_template('index.html')

@app.route('/result', methods=['POST'])
def result():
    validForm = True
    name = request.form['name']
    lang = request.form['lang']
    loc = request.form['loc']
    comment = request.form['comment']
    if(len(comment) > 120):
        validForm = False
        flash("comment should be shorter than 120 chars")
    if(len(name)<=0 or len(comment) <= 0):
        validForm = False
        flash("Please fill out all sections")
    if(validForm == True):
        return render_template('result.html', name = name, lang = lang,loc = loc,comment = comment)
    else:
        return redirect("/")
app.run(debug=True)


#
# userNumber = request.form['number']
# print session['randomNum']
# print userNumber + " User"
# good = ""
# if int(userNumber) == int(session['randomNum']):
#     good = "Nice one"
# else:
#     good = "Nope try again"
