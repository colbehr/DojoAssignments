from flask import Flask, request, redirect, render_template, session, flash
from mysqlconnection import MySQLConnector
app = Flask(__name__)
mysql = MySQLConnector(app,'friendsdb')
@app.route('/')
def index():
    query = "SELECT * FROM fullfriends"                           # define your query
    friends = mysql.query_db(query)                           # run query with query_db()
    return render_template('index.html', all_friends=friends) # pass data to our template

@app.route('/friends', methods=['POST'])
def create():
    name = request.form['Name']
    age = request.form['age']
    print name,age
    query = "insert into fullfriends (Name,age,friends_since,friends_since_year) Values ('" + name + "', "+age+", DATE_FORMAT(NOW(),'%b %yth'), DATE_FORMAT(NOW(),'%Y'))"
    addfriends = mysql.query_db(query)
    return redirect('/')
app.run(debug=True)
