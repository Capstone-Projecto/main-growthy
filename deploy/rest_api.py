from flask import Flask,jsonify,request
from flask_restful import Resource, Api, reqparse
from werkzeug.datastructures import FileStorage
from predict_plant import predict
import tempfile

import sqlite3
from google.cloud import storage
import pandas as pd
import numpy as np
from datetime import datetime
import mysql.connector
import sys

# cnx = mysql.connector.connect(user='root', password='growthy123', host='34.101.70.210', database='growthydb')
# cursor = cnx.cursor()  



app = Flask(__name__)
app.logger.setLevel('INFO')

api = Api(app)

parser = reqparse.RequestParser()
parser.add_argument('file',
                    type=FileStorage,
                    location='files',
                    required=True,
                    help='provide a file')

class Image(Resource):

    def post(self):
        args = parser.parse_args()
        the_file = args['file']
        # save a temporary copy of the file
        ofile, ofname = tempfile.mkstemp()
        the_file.save(ofname)
        # predict
        results = predict(ofname)
        cnx = mysql.connector.connect(user='root', password='growthy123', host='34.101.70.210', database='growthydb')
        cursor = cnx.cursor()  
        query = ("SELECT * from plants WHERE id = '1';")       
        cursor.execute(query)
        # frame = pd.DataFrame(cursor.fetchall())
        frame = cursor.fetchall()
        cursor.close()
        cnx.close()
        ddb = []
        print(frame) 
        # i = 0
        label = ["id", 
                 "local_name",
                 "species", 
                 "genus", 
                 "ordo", 
                 "plant_desc", 
                 "cultivation", 
                 "plant_disease", 
                 "prevention", 
                 "difficulty", 
                 "price", 
                 "plant_img_normal", 
                 "plant_img_wide", 
                 "plant_img_zoom"]
        
        ddb = [frame[0][0], frame[0][1], 
               frame[0][2], frame[0][3], 
               frame[0][4], frame[0][5], 
               frame[0][6], frame[0][7], 
               frame[0][8], frame[0][9], 
               frame[0][10], frame[0][11], 
               frame[0][12], frame[0][13]]
            #    frame[1], frame[2], frame[3], frame[4], frame[5], frame[6], frame[7], frame[8], frame[9], frame[10], frame[11], frame[12]]
            
        data = {label[0]: ddb[0],
                label[1]: ddb[1],
                label[2]: ddb[2],
                label[3]: ddb[3],
                label[4]: ddb[4],
                label[5]: ddb[5],
                label[6]: ddb[6],
                label[7]: ddb[7],
                label[8]: ddb[8],
                label[9]: ddb[9],
                label[10]: ddb[10],
                label[11]: ddb[11],
                label[12]: ddb[12],
                label[13]: ddb[13]
                              
                }
        return data

class Hello(Resource):

    def get(self):
        return {'hello': 'world'}

class returnjson(Resource):
    def get(self):
        data={
            "Modules": 15, 
            "Subject": "Data Structures and Algorithms"
        }
        return data
  
api.add_resource(returnjson,'/returnjson')

api.add_resource(Hello, '/hello')

api.add_resource(Image, '/image')


if __name__ == '__main__':
    app.run(debug=True)