from flask import Flask, request, redirect, render_template, session, flash
from mysqlconnection import MySQLConnector
import re
app = Flask(__name__)
app.secret_key = 'Secret'
mysql = MySQLConnector(app,'loginreg')
@app.route('/')
def index():
    if(session["id"]):
        return redirect('/success')
    else:
        return render_template('index.html')

@app.route('/create', methods=['POST'])
def create():
    validForm = True
    fname = request.form['fname']
    lname = request.form['lname']
    email = request.form['email']
    password = request.form['pass']
    passconf = request.form['passconf']
    if not re.match("[^@]+@[^@]+\.[^@]+", email) and email:
        flash("Invalid Email: Please enter a valid email.")
        validForm = False
    if not len(password) <= 8 or not password:
        flash("Invalid Password: Please enter a valid password (8 or more chars).")
        validForm = False
    if not password == passconf:
        flash("Password doesnt match Password confirmation")
        validForm = False
    if len(fname) <= 2 or not fname:
        flash("Invalid First Name (2 or more chars).")
        validForm = False
    if len(lname) <= 2 or not lname:
        flash("Invalid Last Name (2 or more chars).")
        validForm = False
    if validForm:
        query = "insert into users (fname, lname, email, password) Values ('" + fname + "','" + lname + "','" + email + "','" + password + "')"
        addUser = mysql.query_db(query)
        session["id"] = addUser
        return redirect('/success')
    else:
        return redirect('/')

@app.route('/login', methods=['POST'])
def login():
    email = request.form['email']
    password = request.form['pass']
    if email and password:
        query = "SELECT id, email, password FROM users where email = '" + email + "';"
        login = mysql.query_db(query)
        print login
        if login[0]["email"] == email and login[0]["password"] == password:
            session["id"] = login[0]["id"]
            return redirect('/success')
        else:
            flash("Invalid Login")
    flash("Please Log In")
    return redirect('/')


@app.route('/success')
def success():
    return render_template('success.html', user=session["id"])


@app.route('/logout')
def logout():
    session["id"] = None;
    return redirect('/')

app.run(debug=True)
