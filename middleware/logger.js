const logger = (req, res, next) => {
    req.userid= "qwerrttt"
    console.log(`${req.method} ${req.protocol}://${req.host}${req.originalUrl}`);
    next();
  };
  module.exports= logger;