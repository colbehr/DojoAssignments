
from flask import Flask, render_template, request, redirect, session, flash
import validators
import os
app = Flask(__name__)
app.secret_key = 'ThisIsSecret'

def getYoutube(url):
    command = 'youtube-dl.exe -o ~/Desktop/%(title)s.%(ext)s --extract-audio  --audio-format mp3 ' + url
    os.system(command)
    flash(command)

def getWget(url):
    command = 'sudo wget -r -nc -e robots=off --reject "index.html*" ' + url
    os.system(command)
    flash(command)


@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        url = request.form['url']
        if not validators.url(url):
            flash("Error bad url")
            return render_template('index.html')
        cmd = request.form['cmd']
        if(cmd == "ytdl"):
            print "Exec: ytdl"
            getYoutube(url)
        elif(cmd == "wget"):
            print "Exec: Wget"
            getWget(url)
    return render_template('index.html')

app.run(debug=True)
