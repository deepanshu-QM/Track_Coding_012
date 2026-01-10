
//Making Simple http Server with Buiness Logic

const express = require("express");
const app = express();
const port = 3000;
function sumFunction(n){
    let sum = 0;
    for(let i=0;i<=n;i++){
        sum += i;
    }
    return sum;
}

app.get("/", (req, res) => {
    const n = Number(req.query.n);

    if(isNaN(n) || n < 0){
        return res.status(400).send("Invalid Number")
    }
    const sum = sumFunction(n)
    res.send(sum.toString())
});
app.listen(port , () => {
    console.log(`Server Listen @ $ ${port}`);
});