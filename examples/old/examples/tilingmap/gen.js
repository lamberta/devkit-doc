console.log('[')
for (var i = 0; i < 1000; i++) {
	var line = "";
	for (var j = 0; j < 1000; j++) {
		line += Math.floor(Math.random() * 10000 % 9)
	}
	console.log('"' + line + '",')
}
console.log(']')
