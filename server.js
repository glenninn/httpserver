var https = require('https');
var fs = require("fs");
var express = require('express');
var path = require('path');
var app = express();

var ourPath = path.dirname( process.argv[1] );
var htmlDir = process.argv[2] || "html";
var port = 80;
var secPort = process.argv[3] || 443;
var lc = 0;


app.use(express.static(htmlDir),function(req,res,next){
	conMsg("(http) Req: "+req.path);
	next();
});


function sessionStats() {
console.log("\n***************************************************");
console.log("HTTPS listening on port: " + secPort);
console.log("HTTP listening on port: " + port);
console.log("HTML files folder: " + htmlDir);
console.log("*****************************************************");
}

console.log("\n************** HTTPS Server **************");
console.log("Usage: node server.js {html folder}  {port}");
console.log("  Create simple secure http Web server that answers on the specified TCP port (default: 80)");
console.log("  and serves web pages from the specified html folder {default: ./html");
sessionStats();

function conMsg(s){
	console.log(s);
	lc++;
	if( (lc % 20) == 0 )
		sessionStats();
}


var sslOptions = {
    cert: fs.readFileSync(ourPath + "/certs/server.crt"),
    key: fs.readFileSync(ourPath + "/certs/server.pem")
};
var httpsServer = https.createServer(sslOptions, app);

var server = httpsServer.listen(secPort, function () {
    conMsg('HTTPS Server listening at port '+ secPort);
});

server.on('connection',function(cobj){
	conMsg("(Https) connection: " + JSON.stringify(cobj.address()) );
});



app.listen(80,function(){
	conMsg("HTTP Server listening at port " + port);
});


