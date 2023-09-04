console.log('Nyan!')

function cycleFrames (_nyanCat, _currentFrame) {
	_nyanCat.classList = []
	_nyanCat.classList.add(`frame${_currentFrame}`)
}

function replicateSparks (_sparksRow) {
    const numberOfRowsToCoverEntireScreen = Math.ceil(document.body.offsetHeight / _sparksRow.offsetHeight)
    const newSparksRows = document.createElement('div')

    for (let a = 0; a < numberOfRowsToCoverEntireScreen - 1; a++) {
        newSparksRows.append(_sparksRow.cloneNode(true))
    }

    // Create and prepend the text overlay division
    const textOverlay = document.createElement('div')
    textOverlay.id = 'text-overlay'
    textOverlay.innerHTML = '<p class="customtext"> \
		Can you \
		<span id="customtext-a" style="color: red;">c</span> \
		<span id="customtext-a" style="color: orange;">a</span> \
		<span id="customtext-a" style="color: yellow;">t</span> \
		<span id="customtext-a" style="color: green;">c</span> \
		<span id="customtext-a" style="color: purple;">h</span> \
		the flag?\
		</p>'
    document.body.prepend(textOverlay)

    // Prepend the replicated spark rows
    document.body.prepend(newSparksRows)
}

(function () {
	let nyanCat = document.getElementById('nyan-cat')
	let currentFrame = 1

	replicateSparks(document.getElementsByClassName('sparks-combo')[0])

	setInterval(function () {
		currentFrame = (currentFrame % 6) + 1
		cycleFrames(nyanCat, currentFrame)
	}, 70)
})()

window.onload = function() {
    setTimeout(function() {
        document.getElementById("my_audio").play();
    }, 2000); // 2000 milliseconds (2 seconds) delay
};

// Add a click event listener to the document
document.addEventListener("click", function() {
    // Call your function here
    yourFunction();
});

// Define your function
function yourFunction() {
    // Your code to run when the website is clicked
	document.getElementById("my_audio").play();
}
