const jswToken = require("jsonwebtoken");

module.exports = (req, res, next) => {
  console.log('IN AUTH JS');
  try {
    const bearerToken = req.headers.authorization && req.headers.authorization.split(" ")[1];
    if(!bearerToken) throw "Pas d'autorisation";
    const verifyToken = jswToken.verify(bearerToken, process.env.PASSPHRASE);
    console.log({verifyToken});
    const userId = verifyToken.userId;
    const username = verifyToken.username;
    const isAdmin = verifyToken.isAdmin;
    req.auth = {
      userId: userId,
      username:username,
      isAdmin:isAdmin
    };
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ error });
  }
};
