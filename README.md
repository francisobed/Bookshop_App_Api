

# Bookshop_App_Api

An API that takes record of books in a small shop

API on Heroku
https://bookshopappapinodejs.herokuapp.com/


API DOCUMENTATION
https://documenter.getpostman.com/view/11501979/TVK8aKu9



How to Run
You will have to follow some steps to test the API.

1 - Install MongoDB
To run this project, you need to install the latest version of MongoDB Community Edition first.

https://docs.mongodb.com/manual/installation/

2 - Install Node.js
Download and install Node.js. Make sure to download and install the latest stable version (LTS).

https://nodejs.org/en/download/

To check if Node.js was installed succesfully, run the following command in terminal or command prompt:
node --version

You should see an output like this:

v10.16.0

It indicates that Node.js is running.

2 - Install the API Dependencies
Open the project folder using the terminal or command prompt, then type the following:

npm i

The command above will install all node modules needed for the API to run. If you are using Linux or MacOS and receive a permission denied message, use sudo.

3 - Run the Tests
After installing all dependencies, run the following command to execute all unit and integration tests, to assert that the app is ready to be executed:

npm test

All tests should pass. It may take a while to execute.

A practical node-express project in order to develop my backend implementation skills using javaScript
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes:

#clone the source code using git or download it using top right link

#run following command on project root in order to installing dependencies and dev-dependencies

npm install or yarn

#Running the tests
Application writing base on test driven development; whole tests source codes available on tests directory

4 - Running the Server
After following all steps above, you are ready to start the server. Type the following in the terminal or command prompt:

node index.js

This is going to run the application on port 3000. If this port is busy, the API will run in a different port. You can check the output to see in which port the API is running.



#jest testing command embedded into npm scripts test you can test all aspects of application using following command:
npm run test
