#!/bin/bash

export FLASK_APP=reputation
export PYTHONPATH=.
flask run -h localhost -p 7676
