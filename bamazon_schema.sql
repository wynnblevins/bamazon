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
