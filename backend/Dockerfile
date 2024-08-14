FROM python:3.12

WORKDIR /app

COPY . .

RUN pip install --upgrade --no-cache-dir pip

RUN pip install --no-cache-dir -r requirements.txt

EXPOSE 8000

CMD [ "uvicorn", "app:app", "--host=0.0.0.0" ]