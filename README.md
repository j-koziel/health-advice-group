# Health Advice Group

A simple app which gives you health advice based on the current weather in your location. Also displays a nice visual representation of the air quality in your area 😁

# Development

First clone this repo.

Now, there are two ways you can run this app. If you have docker installed just run 
```docker-compose up --build --watch```

This will run both the API and the React App. The `--watch` flag means that changes on your machine will sync with what is in the container

The second way you could run this is more manual. Here is a step by step guide:
First the react app. cd into the frontend directory and install all the dependencies with `npm i`
Now you can run the app with the command `npm run start:dev`

Second, the API. To run the API make sure you have Python installed preferably a version above 3.10
`cd` into the backend directory and create a virtual environment with this command:
```py -m venv venv```
To activate the virtual environment run ```venv/scripts/activate``` 

After the virtual environment is activated you need to install all the dependencies with pip.
Run this command:
```pip install -r requirements.txt```

Now you should be able to run the API with this command:
```uvicorn app:app --reload``` (The --reload flag automatically refreshes the API when there are changes)
