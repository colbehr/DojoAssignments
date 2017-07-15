from flask import Flask, render_template, request, redirect, session
import random

app = Flask(__name__)
app.secret_key = 'ThisIsSecret'


@app.route('/')
def index():
    # if session['gold'] <= 0:
        # return redirect('/')
    # session['gold'] = 0
    try:
        return render_template('index.html', gold = session['gold'], text = session['text'])
    except KeyError as exception:
        return redirect('/reset')
@app.route('/process_money', methods=['POST'])
def process_money():
    typ = request.form['building']
    if typ == "farm":
        newGold = random.randint(10,20)
        session['gold'] += newGold
        session['text'] += "Made " +  str(newGold) + " on Farm\n"
    elif typ == "Cave":
        newGold = random.randint(5,10)
        session['gold'] += newGold
        session['text'] += "Made " +   str(newGold) + " on Cave\n"
    elif typ == "House":
        newGold = random.randint(2,5)
        session['gold'] += newGold
        session['text'] += "Made " +   str(newGold) + " on House\n"
    elif typ == "Casino":
        newGold = random.randint(-50,50)
        session['gold'] += newGold
        if newGold > 0:
            session['text'] += "Made "  + str(newGold) + " on Casino\n"
        else:
            session['text'] += "Lost " + str(newGold) + " on Casino\n"
    return redirect('/')


@app.route('/reset')
def reset():
    session['gold'] = 0
    session['text'] = ""
    return redirect('/')

app.run(debug=True)
