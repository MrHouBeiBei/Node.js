var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'kitty',
  password : '',
  database : 'test'
});
 
connection.connect();
 
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

connection.query('SELECT opark.id FROM `opark`',function(error, results, fields){
    if(error) throw error;
    console.log(results);
    // console.log(fields);
})

// SELECT * FROM `ticket_collaborator` WHERE address LIKE '%132';