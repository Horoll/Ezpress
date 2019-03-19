var mysql = require('mysql');
var tools = require("./tools");
var con = null

var dbCon = function(){
	if (null === con) con = connect();
		return con;
}

function connect(){
	var dbCof = tools.readJson("./config.json").database;
	con = mysql.createConnection(dbCof);
	return con;
}

exports.dbCon = dbCon;
