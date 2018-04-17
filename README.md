# Bamazon Node App

## Getting Started
### Node Dependencies
After checking out the project, the developer should navigate to the root of the project then run the following command...

`npm install`

Doing this will pull down node dependencies specified in package.json.  The following screenshot shows the ouput of running this command. 
![alt text](https://github.com/wynnblevins/bamazon/blob/master/screenshots/bamazon1.png "Installing Node Modules")

### Local MySQL Setup
In order to run Bamazon locally, a developer needs to have a mysql database called "bamazon" on their machine.  Also the developer will need to create a .env file which will be used by the dotenv node module to populate the database connection details (username, password, address, etc).  The contents of this file are specified below.

### .env File Contents
Bamazon will populate the mysql database connection details by reading a .env file (which the developer will need to create).  The contents of the .env file should look similar to the following with the contents of the curly braces replaced with correct values:

`DB_HOST=localhost<br/>
DB_SCHEMA={some schema}<br/>
DB_USER={some user}<br/>
DB_PASS={some password}`

### Running Bamazon
The following steps assume that the developer has set up a .env file with connection details to a mysql database on which the developer has specified a user/pass combination with the correct access rights.  