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
        return redirect('/wall')
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
        query = "SELECT fname FROM users where id = "+ str(addUser) +";"
        login = mysql.query_db(query)
        session["fname"] = login[0]["fname"]
        return redirect('/wall')
    else:
        return redirect('/')

@app.route('/login', methods=['POST'])
def login():
    email = request.form['email']
    password = request.form['pass']
    encrypted_password = md5.new(password).hexdigest();
    if email and password:
        query = "SELECT id, email, password, fname FROM users where email = '" + email + "';"
        login = mysql.query_db(query)
        if login[0]["email"] == email and login[0]["password"] == encrypted_password:
            session["id"] = login[0]["id"]
            session["fname"] = login[0]["fname"]
            return redirect('/wall')
        else:
            flash("Invalid Login")
            return redirect('/')
    flash("Please Log In")
    return redirect('/')

@app.route('/wall')
def wall():
    if(session.has_key('id') and session["id"] != None):
        query = "SELECT messages.id, messages.message, users.fname, users.lname, messages.user_id, DATE_FORMAT(messages.created_at, '%M %D %Y') AS time FROM messages join users on users.id = messages.user_id;"
        messages = mysql.query_db(query)
        query = "SELECT comments.id, comments.message_id, comments.comment, users.fname, users.lname, comments.user_id, DATE_FORMAT(comments.created_at, '%M %D %Y') AS time FROM comments join users on users.id = comments.user_id;"
        comments = mysql.query_db(query)
        return render_template('wall.html', data=messages, comments = comments, user_fname=session['fname'])
    else:
        flash("Please Log In")
        return redirect('/')


@app.route('/postmessage', methods=['POST'])
def postmessage():
    message = request.form['message']
    query = "insert into messages (user_id, message) Values (:user_id, :message)"
    data = {
        'user_id':session['id'],
        'message':message
    }
    thisid = mysql.query_db(query, data)
    return redirect('/wall')


@app.route('/postcomment', methods=['POST'])
def postcomment():
    comment = request.form['comment']
    messageId = request.form['message_id']
    query = "insert into comments (user_id, message_id, comment) Values (:user_id, :message_id, :comment);"
    data = {
        'user_id':session['id'],
        'message_id':messageId,
        'comment':comment
    }
    thisid = mysql.query_db(query, data)
    return redirect('/wall')

@app.route('/deleteMessage/<id>')
def deleteMessage(id):
    query = "DELETE from messages where messages.id = :id"
    data = {
        'id':id
    }
    mysql.query_db(query, data)
    return redirect('/wall')



@app.route('/deleteComment/<id>')
def deleteComment(id):
    query = "DELETE from comments where comments.id = :id"
    data = {
        'id':id
    }
    mysql.query_db(query, data)
    return redirect('/wall')


@app.route('/logout')
def logout():
    session["id"] = None;
    return redirect('/')



app.run(debug=True)
