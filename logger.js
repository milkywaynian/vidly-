function logger (req, res, next) {
    console.log("I am a logger function");
    next();
}

module.exports(logger);