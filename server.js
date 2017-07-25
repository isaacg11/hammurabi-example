let express = require("express");
let app = express();
let router = express.Router();
let path = __dirname + '/views/';
let bodyParser = require('body-parser');

app.use(bodyParser.json());

router.use(function (req,res,next) {
  next();
});

router.get("/",function(req, res){
  res.sendFile(path + "index.html");
});

router.get("/about",function(req, res){
  res.sendFile(path + "about.html");
});

router.get("/contact",function(req, res){
  res.sendFile(path + "contact.html");
});

let year = 0;
let population = 100;
let acresOfLand = 1000;
let bushels = 3000;
let pricePerAcre;
let totalPrice;

router.post('/next', ((req, res) => {

  // calculate next year's values

}))

router.get('/start', ((req, res) => {
  year += 1;
  pricePerAcre = Math.floor(Math.random()*(26-17+1)+17);

  res.send({
    year: year,
    population: population,
    acres_of_land: acresOfLand,
    bushels: bushels,
    price_per_acre: pricePerAcre,
  })
}))

app.use("/",router);

app.use("*",function(req,res){
  res.sendFile(path + "404.html");
});

app.listen(3000,function(){
  console.log("Live at Port 3000");
});
