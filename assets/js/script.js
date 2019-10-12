// player object
let player = {
	character : $("#player"),
	playerPos : 0 
}

// console.log(player.character)

// ai object
const ai = {
	character : $("#ai"),
	aiPos : 0
}

// console.log(ai)


let playerPosition = 0;
let aiPosition = 0;


$('#startAgain').click(function() {
	 window.location.reload()
})

// move the player function
$('#easy').click(function() {
	// console.log(easy)

player.character.click(function() {
	// console.log($(this))

	$(this).animate({
		'left' : (playerPosition+=100) + 'px'
	})

	// console.log('this is the current value of the player position: ' + playerPosition)
	player.playerPos = playerPosition

	result()
})


const aiMove = () => {
	if(ai.aiPos < 4000) {
	ai.character.animate({
		'left' : (aiPosition+=50) + 'px'
		})	
	} else {
		return true
	}
	console.log(ai.aiPos)
	ai.aiPos = aiPosition
	// aiMove()
	result()

	if(ai.aiPos >= 4000 || player.playerPos >= 4000) {
		return true
	}else {
		setTimeout(aiMove, 500)
	}
}
// move the ai
$("#start").click(function() {
	// console.log(start)
	aiMove()
})

	
})


// MEDIUM BUTTON
$('#medium').click(function() {
	// console.log(medium)

player.character.click(function() {
	// console.log($(this))

	$(this).animate({
		'left' : (playerPosition+=200) + 'px'
	})

	// console.log('this is the current value of the player position: ' + playerPosition)
	player.playerPos = playerPosition

	result()
})


const aiiMove = () => {
	if(ai.aiPos < 4000) {
	ai.character.animate({
		'left' : (aiPosition+=200) + 'px'
		})	
	} else {
		return true
	}
	// console.log(ai.aiPos)
	ai.aiPos = aiPosition
	// setTimeout(aiiMove, 500)
	result()
	if(ai.aiPos >= 4000 || player.playerPos >= 4000) {
		return true
	}else {
		setTimeout(aiiMove, 500)
	}
}
// move the ai
$("#start").click(function() {
	// console.log(start)
	aiiMove()
})
})



// HARD BUTTON
$('#hard').click(function() {

player.character.click(function() {
	// console.log($(this))

	$(this).animate({
		'left' : (playerPosition+=400) + 'px'
	})

	// console.log('this is the current value of the player position: ' + playerPosition)
	player.playerPos = playerPosition

	result()
})


const aMove = () => {
	if(ai.aiPos < 4000) {
	ai.character.animate({
		'left' : (aiPosition+=400) + 'px'
		})	
	} else {
		return true
	}
	// console.log(ai.aiPos)
	ai.aiPos = aiPosition
	// setTimeout(aiiMove, 500)
	result()
	if(ai.aiPos >= 4000 || player.playerPos >= 4000) {
		return true
	}else {
		setTimeout(aMove, 500)
	}
}
// move the ai
$("#start").click(function() {
	// console.log(start)
	aMove()
})
})


const result = () => {
	if(player.playerPos == 4000) {
		Swal.fire({
		  title: 'You Won!',
		  text: 'That was a tough race!',
		  imageUrl: './assets/images/mw.jpg',
		  imageWidth: 400,
		  imageHeight: 200,
		  imageAlt: 'Mario Won',
		  animation: false
		})
		// alert('Mario Won!')
		return true
	}

	if(ai.aiPos == 4000) {
		Swal.fire({
		  title: 'Luigi Won!',
		  text: 'I defeated you!',
		  imageUrl: './assets/images/lw.jpg',
		  imageWidth: 400,
		  imageHeight: 200,
		  imageAlt: 'Luigi Won',
		  animation: false
		})
		// alert('Luigi Won!')
		return true
	}
}
