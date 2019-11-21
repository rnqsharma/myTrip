const cors = require('cors');
((express, server, bodyParser, fs, squatchPurchaseRepo)=>{



  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(express.static("pub"));
  server.use(cors());
server.options('*',cors())
ttps://www.sandbox.paypal.com/cgi-bin/webscr?cmd=_express-check
  server.use(express.static(__dirname + '/dist'));
  //--------------------------------------------------------
  //Home Page

  // server.get('/', (req, res)=>{
  //   fs.readFile('./templates/home.html', (err, results)=>{
  //     res.send(results.toString());
  //   });
  // });
  app.all('/*', function(req, res) {
    res.sendFile(__dirname + '/dist/index.html');
    });

  //--------------------------------------------------------
  //Single Purchases

  server.post('/buysingle', (req, res)=>{
    var quantity = 10;
    console.log("***** "+quantity);
    var purchaseName = "MyTrip Flight Booking";
    var purchasePrice = 10.00;
    var taxPrice = 0;
    var shippingPrice = 0;
    var description = "MyTrip Flight Booking";
    squatchPurchaseRepo.BuySingle(purchaseName, purchasePrice, taxPrice,
      shippingPrice, quantity, description, (err, url)=>{
        if(err){
          res.json(err);
        } else {
          res.redirect(url);
        }
    });
  });

  server.get('/cancel/:orderID', (req, res)=>{
    var orderID = req.params.orderID;
    squatchPurchaseRepo.CancelOrder(orderID, (err, results)=>{
      if(err){
        res.send("There was an error removing this order");
      } else {
        res.redirect("/");
      }
    });
  });

  server.get('/success/:orderID', (req, res)=>{
    var orderID = req.params.orderID;
    var payerID = req.query.PayerID;
    squatchPurchaseRepo.ExecuteOrder(payerID, orderID, (err, successID)=>{
      if(err){
        res.json(err);
      } else {
        res.send('<h1>Order Placed</h1>Please save your order confirmation number : <h3>' + successID + '</h3>');
      }
    });
  });

  server.get('/refund/:orderID', (req, res)=>{
    var orderID = req.params.orderID;
    squatchPurchaseRepo.RefundOrder(orderID, (err, refund)=>{
      if(err){
        res.json(err);
      } else {
        res.json(refund);
      }
    });
  });

  server.get('/orderdetails/:orderID', (req, res)=>{
    var orderID = req.params.orderID;
    squatchPurchaseRepo.GetOrder(orderID, (err, results)=>{
      if(err){
        res.json(err);
      } else {
        res.json(results);
      }
    });
  });

  //--------------------------------------------------------
  //Recurring

  server.post('/buyrecurring', (req, res)=>{
    squatchPurchaseRepo.BuyRecurring("Squatch Plan", "Recurring Squatch Plan", 0, (err, plan)=>{
      if(err){
        res.json(err);
      } else {
        res.redirect(plan);
      }
    });
  });

  server.get('/recurring_success/:planID', (req, res)=>{
    var planID = req.params.planID;
    var token = req.query.token;
    squatchPurchaseRepo.ExecuteRecurring(token, (err, results)=>{
      if(err){
        res.json(err);
      } else {
        res.json(results);
      }
    });
  });

  server.get('/recurring_cancel/:planID', (req, res)=>{
    var planID = req.params.planID;
    //remove from mongoDB
  });

  server.get('/recurring_orderdetails/:agreementID', (req, res)=>{
    var agreementID = req.params.agreementID;
    squatchPurchaseRepo.GetRecurringDetails(agreementID, (err, recurring_orderdetails)=>{
      if(err){
          res.json(err)
      } else {
          res.json(recurring_orderdetails)
      }
    });
  });

  //--------------------------------------------------------

  server.listen(8080, 'localhost', (err)=>{
    if(err){
      console.log('error', err);
    } else {
      console.log('server online');
    }
  });

})
(
  require('express'),
  require('express')(),
  require('body-parser'),
  require('fs'),
  require('./repos/squatchPurchaseRepo.js')
);
