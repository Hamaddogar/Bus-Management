const mongoose = require("mongoose");

module.exports = () => {
    const self = module.exports;
    return mongoose
        .connect( "mongodb+srv://Muhammad:Muhammad@cluster0-oset3.mongodb.net/test?retryWrites=true&w=majority", {
            useNewUrlParser: true,
        
        })
        .then(() => console.log("DB Connected"))
        .catch(err => {
            console.error(
                "Failed to connect to mongo on startup - retrying in 5 sec"
            );
            setTimeout(self, 5000);
        });
};