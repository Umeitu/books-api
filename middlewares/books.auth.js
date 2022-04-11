function auth(req, res, next) {
    let isVerified = true;
    if (isVerified){
        console.log("Logger is successfully");
        next();
    } else {
        console.log("Not authorized");
        next();

    }

}
module.exports =auth;
