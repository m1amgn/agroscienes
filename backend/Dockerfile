FROM python:3.10-slim-buster
RUN apt-get update -y && apt-get install -y \
python3-dev python-tk python3-tk tk-dev
RUN pip install --upgrade pip
COPY req.txt .
RUN pip install -r req.txt

COPY . .

CMD [ "gunicorn", "--bind", ":8000", "--workers", "4" "backend.wsgi:application" ]

