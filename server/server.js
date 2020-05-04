// Packages
const expressValidator = require("express-validator");
const express = require("express");
require("express-async-errors");
const cors = require("cors");
require("dotenv").config();
const app = express();
const Bus = require(".././server/models/Bus");
const _ = require("lodash");
const sharp = require("sharp");
const path = require("path");
const fs = require("fs");
const { checkDateAvailability } = require(".././server/helpers");

var upload = require('../server/helpers/busmulter');


// Import methods
const { runEveryMidnight, dbConnection } = require("./helpers");
const logger = require("./helpers/logger");

// Database Connection
dbConnection();

// Middlewares
logger(app);

app.use(cors());
app.use(express.json());
app.use(expressValidator());

app.use(express.static(path.join(__dirname,'./public')));
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
  res.redirect("/api/users");
});

app.use("/api/auth-owner/", require("./routes/auth-owner"));
app.use("/api/auth-user", require("./routes/auth-user"));
app.use("/api/bookings", require("./routes/booking"));
app.use("/api/bus", require("./routes/bus"));
app.use("/api/guests", require("./routes/guest"));
app.use("/api/locations", require("./routes/location"));
app.use("/api/owners", require("./routes/owner"));
app.use("/api/travels", require("./routes/travel"));
app.use("/api/users", require("./routes/user"));

// Error handling middleware
// app.use(function(err, req, res, next) {
  //   return res.status(500).json({
    //     error: errorHandler(err) || "Something went wrong!"
    //   });
    // });
    
    // Run every-midnight to check if bus deporting date is passed
    runEveryMidnight();
    
    
    
    
    
    
    
    app.post("/bus", upload.array('image'), (req, res, next) => {
      console.log(req.file)
      console.log(req.body)
      req.body.image="bus4.jpg"
      let addbus= new Bus(req.body)
      
      // let product = new Product({ name: req.body.name,  price: req.body.price,discounted_price: req.body.discounted_price, photoname: req.files.map((picname) => { return picname.filename }), description: req.body.description, userId: req.body.userId });
      
      addbus.save((err, user) => {
        if (err) {
          return res.json({ success: false, err: err })
        }
        
        res.json({ success: true, data: user })
      });
      
    })
    
    
    
    app.use(express.static('../server/helpers/uploads'));
    

    //   app.post("/bus"
    // , (req, res) => {
   

      
      //    console.log(req.body)
      //   // // const busExists =  Bus.find({ busNumber: req.body.busNumber });
      //   // // console.log(req.body)
      //   // // if (busExists)
      //   // //   return res.status(403).json({
//   // //     error: "Bus is already added!"
//   // //   });

//   if (req.file !== undefined) {
//     const { filename: image } = req.file.name;

//     //Compress image
//     await sharp(req.file.path)
//       .resize(800)
//       .jpeg({ quality: 100 })
//       .toFile(path.resolve(req.file.destination, "resized", image));
//     fs.unlinkSync(req.file.path);
//     req.body.image = "busimage/resized/" + image;
//   }

  
//   if (req.body.boardingPoints) {
//     req.body.boardingPoints = req.body.boardingPoints.split(",");
//   }

//   if (req.body.droppingPoints) {
//     req.body.droppingPoints = req.body.droppingPoints.split(",");
//   }

//    var  bus = new Bus(req.body);

//   if (!checkDateAvailability(req.body.journeyDate)) {
//     bus.isAvailable = false;
//   }

//    bus.owner = req.ownerauth;
  

//  bus.save();


//   res.json(bus);
// })
 app.post('/:busSlug',(req, res) => {
  let bus = req.bus;
   bus.remove();
  res.json({ message: "Bus removed successfully" });
 });

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
