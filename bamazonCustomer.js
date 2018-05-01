var mysql = require("mysql");
var inquirer = require ("inquirer");


var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "bamazon"
});
connection.connect(function(err){
    if(err) throw err;
    Landing();
});
function Landing(){
  connection.query("SELECT * FROM products", function(err, res){
    for(var i = 0; i < res.length; i++){
      console.log(JSON.stringify(res[i]));
    } 
  inquirer.prompt(
    {
      name: 'landing',
      type: 'rawlist',
      message: 'Welcome To Bamazon! Please Take A Moment To Look At Our Products! If You Find Something You Want Click Take Me To Store',
      choices: [
        'Shop!'
      ]
    })
  .then(function(answer) {
    switch (answer.landing) {
    case "Shop!":
      start();
    }
})
  })
};
// Then create a Node application called bamazonCustomer.js. Running this application will first 
// display all of the items available for sale. Include the ids, names, and prices of products for sale.
function start(){
    connection.query("SELECT * FROM products", function(err, res){
     // The app should then prompt users with two messages.
// The first should ask them the ID of the product they would like to buy.
      inquirer
        .prompt([
          {
          name: "choice",
          type: "rawlist",
          choices: function() {
            var choiceArray = [];
            for (var i = 0; i < res.length; i++) {
              choiceArray.push(res[i].product_name);
            }
            return choiceArray;
          },
          message: "Which Product Would You Like To Purchase?"
        },
// The second message should ask how many units of the product they would like to buy.
        {
          name: 'Units',
          type: 'input',
          message: 'How Many Units Would You Like To Purchase?'
        }

        ])
// Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.
        .then(function(answer) {
          var chosenItem;
          for (var i = 0; i < res.length; i++) {
            if (res[i].product_name === answer.choice) {
              chosenItem = res[i];
            }
          }
          if (chosenItem.stock_quantity > parseInt(answer.Units)) {
            console.log('Ok! We Have That In Stock');
            let NewQuantity = (chosenItem.stock_quantity - answer.Units);
            console.log('Your Total Is: '+ '$'+ chosenItem.stock_quantity * chosenItem.price);
            connection.query(
              "UPDATE products SET ? WHERE ?",
              [
                {
                  stock_quantity: NewQuantity
                },
                {
                  item_id: chosenItem.item_id
                }
              ]),   
              console.log('Thanks For Shoping With Us! Come Back Soon!')
          setTimeout(myfunction, 5000)
          function myfunction(){
            Landing();
          }
          }
// If not, the app should log a phrase like Insufficient quantity!, and then prevent the order from going through.
          else {
            console.log("Insufficient quantity!");
            start();
          }

        });     
          
})
};

