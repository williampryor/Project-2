from typing import Text
from flask import Flask, redirect, render_template, url_for, jsonify
import json

app = Flask(__name__)

@app.route('/')

@app.route('/home')
def home():
    return render_template('home.html')

@app.route('/data1')
def data_1():
    return render_template('data1.html')

@app.route('/data2')
def data_2():
    return render_template('data2.html')

@app.route('/chart1')
def chart1():
    return render_template('heatmap.html')

@app.route('/chart2')
def chart2():
    return render_template('index.html')


if __name__ == '__main__':
    app.run(debug=True)