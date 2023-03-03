# Spotify Search App</br>

## Project Overview:

#### The Spotify Search App is a web application that allows users to search for an artist, album, or song through the Spotify API. Once a search query has been entered into the search bar, the user is redirected to the search results page where they can view and listen to what they searched for. This project employs a frontend and a backend in order to trace and keep up with OAuth JSON web tokens.

----

## Prerequisites:

* MongoDB >= 5.1
* NodeJS >= v16.13.0
* npm >= v8.1.0
* Yarn >= v1.22.19
* Chrome/Firefox/Safari/Edge >= Latest 2 major versions

---

## Technologies:

* MongoDB
* ReactJs
* Tailwind
* ExpressJS
* NodeJS

---

## Getting Started
    
 #### You must have a ```.env``` file to run the application. This file allows sensitive information, such as user credentials, to be stored in a local environment. This file should be added to a ```.gitignore``` file so that it is not uploaded to code repositories online for everyone to read. This can be achieved by making a copy of the ```.env.dist``` file and change the name to ```.env``` by running the following command in terminal:
 ```javascript
cp .env.dist .env && vim .env
```
#### Next, you must add your own environment variables inside the file.
#### The next step is to add the dependencies (node modules) by running the following command:
```javascript 
npm install
```
#### Once all dependencies have been installed, you can run the project. You must open two terminal windows, one for the frontend and one for the backend.

## To Run React.js (frontend)
```javascript
cd frontend
npm start
```

## To Run Express (backend)
```javascript
cd backend
npm run dev
```

---

## Links
#### Links to the project include the following:
* <http://localhost:3000> - Link to the frontend (React.js) application, the main user interface of the Spotify application.

* <http://localhost:3001> - Link to the backend (Express) application.

