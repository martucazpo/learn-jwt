
module.exports = {
    verifyRoute: (req, res, next) => {
        const bearerHeader = req.headers['authorization'];
        if(typeof bearerHeader !== 'undefined'){
            const bearer = bearerHeader.split(' ');
            const bearerToken = bearer[1]
            req.token = bearerToken;
            next(); 
        }else{
            console.log("somethings wrong")
            res.sendStatus(403);
        }
    }
}