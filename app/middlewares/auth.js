const auth = require('../services/auth');

module.exports = async(req,res,next)=>{    
    let token = req.headers.authorization ||
                req.body.authorization ||
                req.query.token;
                
    if(!token) {
        res.status(403).json({ 
            status : false,
            code: 403,
            message : 'توکن ارسال نشده است.'
        });
    }
    else {
        try {
            let AUTH = await auth.AccessToken(token);                        
            if(AUTH == false) {
                res.status(403).json({
                    status : false,
                    code: 403,
                    message : "توکن اشتباه است."
                })
            }
            else{
                req.token = token;
                req._id = AUTH['id'];
                req.permission = AUTH['type'];   
                                
                next();
            }
        } catch (error) {            
            res.status(403).json({
                status : false,
                code: 403,
                message : "توکن اشتباه است."
            })
        }
    }
};