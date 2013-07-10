$.ajax({
	type: 'GET', // http method
	dataType: 'JSON', // type of data 'xml', 'html', 'text', 'json'
	data: 'matchID=5', // data to be sent
	url: '/urlToGet', // url to perform request on
	beforeSend: function(jqXHR, settings){  // callback to be performed before request
	},
	success: function(data, stats, jqXHR){ // callback to be performed on success
	},
	error: function(jqXHR, status, error){ // callback to be performed on error

	}
});

$.get("test.php", function(data) {
  alert("Data Loaded: " + data); // performing get request
});

$.post("test.php", { name: "John", time: "2pm" })
.done(function(data) {
  alert("Data Loaded: " + data); // performing post request
});