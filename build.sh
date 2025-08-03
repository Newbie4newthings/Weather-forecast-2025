#!/usr/bin/env bash
# exit on error
set -o errexit
echo "Building the project..."
python -m pip install --upgrade pip
pip install -r weatherProject/requirements.txt

echo "Collecting static files..."
python weatherProject/manage.py collectstatic --noinput

echo "Running migrations..."
python weatherProject/manage.py migrate