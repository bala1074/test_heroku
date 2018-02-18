const express=require('express');
const app=express();
app.get('/',function(req,res){
    res.send('Hey hey.. TestHeroku');
});
app.listen(process.env.PORT||3000);