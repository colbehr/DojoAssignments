from flask import Flask, request, redirect, render_template, session, flash
from mysqlconnection import MySQLConnector
import md5
import re
app = Flask(__name__)
app.secret_key = 'Secret'
mysql = MySQLConnector(app,'loginreg')
@app.route('/')
def index():
    if(session.has_key('id') and session["id"] != None):
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
    query = "SELECT email FROM users where email = '" + email + "';"
    login = mysql.query_db(query)
    if login:
        if login[0]["email"] == email:
            flash("Invalid Email: Email already exists, please log-in")
            validForm = False
    if not re.match("[^@]+@[^@]+\.[^@]+", email) and email:
        flash("Invalid Email: Please enter a valid email.")
        validForm = False
    if len(password) < 8 or not password:
        flash("Invalid Password: Please enter a valid password (8 or more chars, a mix of numbers and letters).")
        validForm = False
    if not password == passconf:
        flash("Password doesnt match Password confirmation")
        validForm = False
    if len(fname) <= 2 or not fname or not fname.isalpha():
        flash("Invalid First Name (2 or more letters).")
        validForm = False
    if len(lname) <= 2 or not lname or not lname.isalpha():
        flash("Invalid Last Name (2 or more letters).")
        validForm = False
    if validForm:
        encrypted_password = md5.new(password).hexdigest();
        query = "insert into users (fname, lname, email, password) Values ('" + fname + "','" + lname + "','" + email + "','" + encrypted_password + "')"
        addUser = mysql.query_db(query)
        session["id"] = addUser
        return redirect('/success')
    else:
        return redirect('/')

@app.route('/login', methods=['POST'])
def login():
    email = request.form['email']
    password = request.form['pass']
    encrypted_password = md5.new(password).hexdigest();
    if email and password:
        query = "SELECT id, email, password FROM users where email = '" + email + "';"
        login = mysql.query_db(query)
        if login[0]["email"] == email and login[0]["password"] == encrypted_password:
            session["id"] = login[0]["id"]
            return redirect('/success')
        else:
            flash("Invalid Login")
            return redirect('/')
    flash("Please Log In")
    return redirect('/')


@app.route('/success')
def success():
    if(session.has_key('id') and session["id"] != None):
        return render_template('success.html', user=session["id"])
    else:
        flash("Please Log In")
        return redirect('/')



@app.route('/logout')
def logout():
    session["id"] = None;
    return redirect('/')

app.run(debug=True)
