require("dotenv").config();
const db = require('mysql');
const Table = require('cli-table');
var inquirer = require('inquirer');

var connection = null;

function onInit() {
    connection = db.createConnection({
        host     : process.env.DB_HOST,
        user     : process.env.DB_USER,
        password : process.env.DB_PASS,
        database : process.env.DB_SCHEMA
    });
    connection.connect();
    
    connection.query('SELECT * FROM products;', 
        function (error, results, fields) {;
    
        if (!error) {
            displayTable(results);
            console.log('Before user prompt.');
            promptUserPurchase();
        } else {
            var errorMsg = `Oppsie woopsie, something went wrong grabbing data: \n${error}`;
            throw errorMsg;
        }    
    });
}

function displayTable(results) {
    var table = new Table({ head: [
        "ID", "Product Name", "Department Name", "Price", "Quantity"] 
    });
    
    for (var i = 0; i < results.length; i++) {
        table.push([
            results[i].item_id, 
            results[i].product_name,
            results[i].department_name,
            results[i].price,
            results[i].stock_quantity            
        ]);
    }

    console.log(table.toString());
}

function promptUserPurchase() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'itemId',
            message: 'Enter the ID of the item you wish to purchase: '
        },
        {
            type: 'input',
            name: 'quantity',
            default: 'Number',
            message: 'How many would you like to buy?'
        }
    ]).then(function (answer) {
        handlePromtResponse(answer);
    });
}

function handlePromtResponse(promptResponse) {
    onInit();
}

onInit();

connection.end();