var express=require('express');
var app=express();
var path=require('path');

app.set('port',3000);


// app.use(function(req,res,next){// this will run before we request any of the static files as we have declared it before declaring static files
//     console.log(req.method,req.url);// prints which files are requested
//     next();// continues to render files
// });


app.use('/css',function(req,res,next){// this will run before we request '/css' files path
    console.log(req.method,req.url);// prints which files are requested
    next();// continues to render files
});

app.use(express.static(path.join(__dirname,'public')));//setting static servings

/*
//if we put below the static file requested the middleware wont run
app.use(function(req,res,next){// this will run before we request any of the static files as we have declared it before declaring static files
    console.log(req.method,req.url);// prints which files are requested
    next();// continues to render files
});
*/
var server=app.listen(app.get('port'),function(){
    console.log("Listening port "+server.address().port);
});