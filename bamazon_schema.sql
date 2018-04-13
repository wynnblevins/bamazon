DROP SCHEMA IF EXISTS bamazon;

CREATE SCHEMA IF NOT EXISTS bamazon;
USE bamazon;

-- GAAP (Generally Accepted Accounting Principles) compliance 
-- requires the use of Decimal(13, 4) for all monetary database fields 
CREATE TABLE IF NOT EXISTS products (
    item_id INT(4) AUTO_INCREMENT PRIMARY KEY, 
    product_name varchar(255) NOT NULL,
    department_name varchar(255),
    price DECIMAL(13, 4) NOT NULL,
    stock_quantity INT(4) NOT NULL
);
 
INSERT INTO products (product_name, department_name, price, stock_quantity) 
    VALUES ("ASUS X555L Laptop", "Electronics", 250.00, 5);
INSERT INTO products (product_name, department_name, price, stock_quantity) 
    VALUES ("Mac Mini", "Electronics", 599.99, 3);
INSERT INTO products (product_name, department_name, price, stock_quantity) 
    VALUES  ("Mexican Made 2000 Fender Stratocaster", "Instruments", 400.00, 1);
INSERT INTO products (product_name, department_name, price, stock_quantity) 
    VALUES ("2004 Gibson Les Paul Studio", "Instruments", 699.99, 1);
INSERT INTO products (product_name, department_name, price, stock_quantity)
    VALUES ("Panasonic TV", "Electronics", 299.99, 4);
INSERT INTO products (product_name, department_name, price, stock_quantity) 
    VALUES ("Second Hand Love Seat", "Furniture", 75.00, 1);
INSERT INTO products (product_name, department_name, price, stock_quantity)
    VALUES ("Armless Leather Office Chair", "Furniture", 99.99, 2);
INSERT INTO products (product_name, department_name, price, stock_quantity)
    VALUES ("Samsung S8 Cellular Telephone", "Electronics", 150.00, 6);
INSERT INTO products (product_name, department_name, price, stock_quantity)
    VALUES ("Fender Champion 20 Watt Practice Amp", "Instruments", 110.00, 7);
INSERT INTO products (product_name, department_name, price, stock_quantity) 
    VALUES ("Arm and Hammer Kitty Litter", "Pet Supplies", 14.99, 3);