from flask import Flask, request, redirect, render_template, session, flash
from mysqlconnection import MySQLConnector
import re
app = Flask(__name__)
app.secret_key = 'Secret'
mysql = MySQLConnector(app,'emails')
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/validate', methods=['POST'])
def create():
    email = request.form['email']
    if not re.match("[^@]+@[^@]+\.[^@]+", email):
        flash("Invalid Email: Please enter a valid email.")
        return redirect('/')
    else:
        query = "insert into emails (email,created_at) Values ('" + email + "', DATE_FORMAT(NOW(),'%m/%d/%Y %T%p'))"
        addEmail = mysql.query_db(query)
        session["id"] = addEmail
        return redirect('/success')

@app.route('/success')
def success():
    query = "SELECT email FROM emails where id = " +  str(session['id'])
    submittedEmail = mysql.query_db(query)
    query = "SELECT * FROM emails"
    emails = mysql.query_db(query)
    return render_template('success.html', emails=emails, submittedEmail = submittedEmail[0]["email"])

app.run(debug=True)
