require("dotenv").config();
const db = require('mysql');
const Table = require('cli-table');
var inquirer = require('inquirer');

var connection = null;
var currentDb = null;

function promptForInput() {
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
            promptUserPurchase();
        } else {
            var errorMsg = `Oppsie woopsie, something went wrong grabbing data: \n${error}`;
            throw errorMsg;
        }    
    });
}

function getCurrentStockQuantityFor(id, callback) {
    connection = db.createConnection({
        host     : process.env.DB_HOST,
        user     : process.env.DB_USER,
        password : process.env.DB_PASS,
        database : process.env.DB_SCHEMA
    });
    connection.connect();
    
    connection.query('SELECT stock_quantity FROM products WHERE item_id = ' + id, 
        function (error, results, fields) {;
            
        if (!error) {
            callback(results);                
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

function updateStockQuantity(quantityBought, id) {
    console.log('update db called with: ID: ' + id + ' QUANTITY: ' + quantityBought);

    connection = db.createConnection({
        host     : process.env.DB_HOST,
        user     : process.env.DB_USER,
        password : process.env.DB_PASS,
        database : process.env.DB_SCHEMA
    });
    connection.connect();

    // Make call to db to get current stock quantity
    getCurrentStockQuantityFor(id, function (currentQuantity) {
        var updatedQuantity = parseInt(currentQuantity[0].stock_quantity) - parseInt(quantityBought);
        
        // ...then update the db with the new quantity
        console.log('Updated Quantity: ' + updatedQuantity);

        connection.query('UPDATE products SET stock_quantity = ? where item_id = ?', [
            updatedQuantity, id
        ], function (error, results, fields) {;
            if (!error) {
                promptForInput();
            } else {
                var errorMsg = `Oppsie woopsie, something went wrong grabbing data: \n${error}`;
                throw errorMsg;
            }    
        });
    });
}

function handlePromtResponse(promptResponse) {
    var id = promptResponse.itemId;
    var quantityToBuy = promptResponse.quantity;
    updateStockQuantity(quantityToBuy, id);
}

// this will prompt first time, every other prompt is recursively called
promptForInput();

connection.end();