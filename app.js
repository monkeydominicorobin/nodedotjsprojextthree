var pagpapahayag = require('express');
var m = require('morgan');
var aplikasyon = pagpapahayag();
var daan = require('path');
var mu = require('multer');
var u = mu();

aplikasyon.get('/', function(pakiusap, tugon, susunod){
   tugon.sendFile(daan.join(__dirname+'/index.html')); 
});

aplikasyon.post('/upload', u.single('file'), function(pakiusap, tugon){
   tugon.json(pakiusap.file); 
});

aplikasyon.listen(process.env.PORT, function(){
    console.log('Listening on port ' + process.env.PORT);
});
