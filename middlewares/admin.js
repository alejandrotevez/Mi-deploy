
//ES5 = VERSION 5 DE JS: const admin = funtion(req, res, next)

//ES6 = VERSION 6 DE JS.const admin = (req, res, next)

const admin = (req, res, next) =>{
    console.log('Middleware de admin en un archivo diferente');
    next();
}

module.exports = {
    admin
}