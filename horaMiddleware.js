const horaMiddleware = (req, res, next) => {
    const currentDate = new Date();
    const currentHour = currentDate.getHours(); 
    req.currentHour = currentHour;
    next();
  };
  
  module.exports = horaMiddleware;
  