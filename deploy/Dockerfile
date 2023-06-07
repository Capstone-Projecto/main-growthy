# syntax=docker/dockerfile:1
FROM ubuntu:22.04

# install app dependencies
RUN apt-get update && apt-get install -y python3 python3-pip
RUN pip install flask flask-restful tensorflow numpy matplotlib werkzeug
RUN pip install google.cloud.storage pandas numpy mysql.connector
RUN apt-get install sqlite3

# install app
COPY rest_api.py /
COPY predict_plant.py /
COPY 97.jpg /
COPY model/predict_plant.h5 /model/

# final configuration
ENV FLASK_APP=rest_api
EXPOSE 5000
CMD flask run --host 0.0.0.0 --port 5000
# CMD ["python3", "rest_api.py"]