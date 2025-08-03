#!/usr/bin/env bash
set -o errexit

echo "Installing dependencies..."
python -m pip install --upgrade pip
pip install -r weatherProject/requirements.txt

echo "Moving to project directory..."
cd weatherProject

echo "Collecting static files..."
python manage.py collectstatic --noinput --clear

echo "Running migrations..."
python manage.py migrate --noinput

echo "Build completed."