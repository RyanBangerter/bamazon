DROP DATABASE IF EXISTS Bamazon;
CREATE DATABASE Bamazon;
USE Bamazon;
CREATE TABLE products(
  item_id INTEGER(100)NULL,
  product_name VARCHAR(100)NULL,
  department_name VARCHAR(100)NULL,
  price INTEGER(100)NULL,
  stock_quantity INTEGER(100)NULL
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) values (001, 'Tv', 'Electronics', 500, 30);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) values (002, 'Cellphone', 'Electronics', 300, 8);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) values (003, 'Computer', 'Electronics', 800, 13);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) values (004, 'Remote', 'Electronics', 50, 10);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) values (005, 'Watch', 'Electronics', 200, 10);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) values (006, 'Mouse', 'Electronics', 30, 10);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) values (007, 'Keyboard', 'Electronics', 70, 10);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) values (008, 'Speakers', 'Electronics', 50, 10);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) values (009, 'HDMI Cable', 'Electronics', 20, 20);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) values (010, 'Cellphone Case', 'Electronics', 20, 20);


SELECT item_id, product_name, price
FROM products

