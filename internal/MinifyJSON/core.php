<html>

<head>
<title>JSON Minify</title>

<script src="jquery-3.4.1.min.js" type="text/javascript"></script>
<script src="download.js" type="text/javascript"></script>
<script type="text/javascript">
var targetURLS =
	[	"../../ByInternal.json",
		"../../ByName.json",
	];
	
var lastData;

function getDatas() {
	$.each(targetURLS, function(k, v) {
		var parts = v.split("/");
		var file = parts[parts.length-1];
		var fileParts = file.split(".");
		var fileName = fileParts[0];
		var fileExt = fileParts[1];
		
		var response  = $.get(v, "", function(data) {
			lastData = data;
			var d = data.replace(/[\t\r\n ]/gi, "");
			console.log(data.length + " => " + d.length);
			download(d, fileName + ".min." + fileExt, "text/plain");
		}, "text");
	});
}
</script>

</head>

<body>

<input type="button" onClick="getDatas()" value="Get Datas" />

</body>

</html>