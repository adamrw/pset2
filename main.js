$(document).on('ready', function() {

//     part 1
function firstReverse (shitString) {
	var shitty = shitString.split('');
	var shittier = [];
	var j = 0;
	for (var i = shitty.length - 1; i > -1; i--) {
		shittier[j] = shitty[i];
		j++;
	}
	var shat = shittier.join('');
	return shat;
}

console.log(firstReverse("Here's my shit string"));



//    part 2

function swapCase (shitSwap) {
	var shitSwapped = "";
	for (var i = 0; i < shitSwap.length; i++) {
		if (shitSwap[i] === shitSwap[i].toUpperCase()){
			shitSwapped += shitSwap[i].toLowerCase();
		}
		else {
			shitSwapped += shitSwap[i].toUpperCase();
		}
	}
	return shitSwapped;
}
console.log(swapCase("Here's MY shit Swap"));
});


