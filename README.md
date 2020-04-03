# Unit 14 Sequelize Homework: Reverse Engineering Code

## Starter Code Inspection

# Developer folder (main folder)

### config folder
- - - middleware folder
- - - - isAuthenticated.js
- - - - config.json
- - - - passport.js

### models folder
- - - - index.js
- - - - user.js

### public folder
- - - js folder
- - - - login.js
- - - - members.js
- - - - signup.js
- - - stylesheets folder
- - - - style.css
- - - login.html
- - - members.html
- - - signup.html

### routes folder
- - - - api-routes.js
- - - - html-routes.js


- package.json
- server.js
- README.md

======================================================
# Config Folder:

This folder contains a middleware folder that holds 3 files inside:
- isAuthenticated.js: it is a middleware that restricts routes a user can access if they are not logged in. "redirect" will send them to the login page. 
- config.json - inside this file, there are 3 databases: "passport-demo", "database-test", "database-production". The first is used for development, second for tests, and the last is for the production, when the user can see the page. 
- passport.js -contains the passport authentication middleware for node.js to authenticate requests - for user login. It has an object named "LocalStrategy" that uses the functions to work with "strategy" from inside  of "passport-local" library. 
The variable "db" reads the models that exist and that control my database. It uses the "validPassword" method to verify if the password is the same in the database. An object is created (new) to set how the user will sign in - by email.This email search will be done through sequelize "findOne". If user doesn't type the email, an error message will show: "Incorrect email". The same with the password, a message will show: "Incorrect Password" if the input isn't correct. 

# Models Folder:

This folder contains index.js and user.js files. The index.js file uses the models that are in the model folder(user). This user model is in user.js that is responsible for setting up the sequelize table with email and password.
==================================continue



## Tutorial


###  Here are some examples of things you could change in this application and how you would do that:

