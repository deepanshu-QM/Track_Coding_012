
//Validate 

function validate(schema){
    return(res, req, next) => {
        const result = schema.parse(req.body);
        if(!result.sucess){
            req.status(400).json({Msg : "Invalid Input "});
        }
        req.body = result.body;
        next();
    };
}

module.exports = validate;