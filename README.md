# Bamazon Node App

## Getting Started
### Node Dependencies
After checking out the project, the developer should navigate to the root of the project then run the following command...

```shell
npm install
```

Doing this will pull down node dependencies specified in package.json.  The following screenshot shows the ouput of running this command. 


![alt text](https://github.com/wynnblevins/bamazon/blob/master/screenshots/bamazon1.png "Installing Node Modules")

### Local MySQL Setup
In order to run Bamazon locally, a developer needs to have a mysql database called "bamazon" on their machine.  Also the developer will need to create a .env file which will be used by the dotenv node module to populate the database connection details (username, password, address, etc).  The contents of this file are specified below.

### .env File Contents
Bamazon will populate the mysql database connection details by reading a .env file (which the developer will need to create).  The contents of the .env file should look similar to the following with the contents of the curly braces replaced with correct values:
```
DB_HOST=localhost
DB_SCHEMA=bamazon
DB_USER={some user}
DB_PASS={some password}
```

### Importing Sample Data
To import sample data, run the following command within the root of the bamazon project and enter your mysql password when prompted.

```shell
mysql -u root -p < bamazon_schema.sql
```

### Running Bamazon
The following steps assume that the developer has A) MySQL installed with data imported, B) run npm install and C) set up a .env file with connection details to a mysql database on which the developer has specified a user/pass combination with the correct access rights.  See above for more details on this.  Upon running bamazon, the user will see the following if they have set the project up correctly.


![alt text](https://github.com/wynnblevins/bamazon/blob/master/screenshots/bamazon2.png "Installing Node Modules")

After the user enters the values the are being prompted for (see above screenshot) and hits enter, the table will refresh and update the quantities of the objects (in our example above, we bought three ASUS X555L Laptops).  Thus we are presented with the following table:

![alt text](https://github.com/wynnblevins/bamazon/blob/master/screenshots/bamazon3.png "Updating Table Values")
 
To exit the Bamazon CLI program, press ctrl -> c;