// console.log("js is linked!");

// Jquery, JS.

// Crystal Collector

// Goal of the game is to match the random number without going over.

// Randomly generate a # at the beginning of the game between 19-120.

// You have 4 Crystals, each representing a number that is hidden.

// When you click the crystal it will add the value of the crystal to "your" number.

// The only way to find value of a crystal is to click on it. 

// Each game randomizes the value of the crystal between 1-12.

//crystal will be appended to the screen at page.on load 

//wins, losses, goal, total and tries will be display on the screen and updated dynamically 

// When the game is over:
	// random # cahnges again
	// a win or loss is added
	// value of crystal changes
$(document).ready(function(){
	var goal;
	var losses = 0;
	var wins = 0;
	var currCount = 0;
	$('#losses').html(losses);
	$('#win').html(wins);
	$('#currCount').html(currCount)
	startGame();
	

	var val;
	var newVal;
	$('.crys-img').on('click', function(){
		val = parseInt($(this).attr('data-value')); //before parseInt val looks like this ---> '2'(string) after it looks like this ---> 2(number)  
	 	currCount = val + currCount
		$('#currCount').html(currCount);
		check();
	})

	function startGame(){
		 goal = Math.floor(Math.random() * 101 + 19);
		var imgNam = ["assets4/images/blueGem.png","assets4/images/greenGem.png","assets4/images/redGem.png","assets4/images/yellowGem.png"]
		
		var values = [Math.floor((Math.random() * 12) + 1), Math.floor((Math.random() * 12) + 1), Math.floor((Math.random() * 12) + 1), Math.floor((Math.random() * 12) + 1)]
		var img;
		$('#img').empty();
		for(var i = 0; i < imgNam.length; i++ ){
		img = $('<img>')
		img.addClass('crys-img')
		img.attr('src', imgNam[i])
		//this is a data attribute used to refer to data similar to JS var but not equal
		// data value assigns the hidden value of each gem
		img.attr('data-value', values[i])
		$('#img').append(img)

		}

		$('#goal').html(goal);
	}

	function check(){
	 if (currCount > goal ){
	 	console.log('you lose')
	 	losses++
	 	$('#losses').html(losses);
	 	//startGame();
	 } else if ( currCount === goal ){
	 	console.log('you won!')
	 	wins++
	 	console.log(wins)
	 	$('#win').html(wins);
	 	// startGame();
	 }
	}
})

// I didnt get a game reset installed.






