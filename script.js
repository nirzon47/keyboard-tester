const curr = document.getElementById('current-key')
const prev = document.getElementById('last-key')
const code = document.getElementById('key-code')
const prompt = document.getElementById('prompt')

document.addEventListener('keydown', (e) => {
	prompt.classList.add('opacity-0')
	prev.textContent = curr.textContent

	if (e.keyCode === 32) {
		curr.textContent = 'Space'
	} else {
		curr.textContent = e.key
	}

	code.textContent = e.keyCode
	if (
		e.keyCode === 16 ||
		e.keyCode === 17 ||
		e.keyCode === 18 ||
		e.keyCode === 13
	) {
		const key = document.getElementsByClassName(`${e.keyCode}`)

		key[0].classList.add('bg-success')
		key[1].classList.add('bg-success')
	} else {
		document.getElementById(`${e.keyCode}`).classList.add('bg-success')
	}
})
