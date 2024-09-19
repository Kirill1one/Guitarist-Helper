// Рандомное число от 0 до 10
function anyNumber() {
	return Math.floor(Math.random() * 11)
}

function updateNumber() {
	const randomNumber = anyNumber() // Получаем случайное число
	const rootElement = document.getElementById('root')
	rootElement.innerHTML = randomNumber
	const directionArrow = randomNumber > 5 ? 'up' : 'down' // Направление стрелки

	const symbolArrow = directionArrow === 'up' ? '↑' : '↓'

	rootElement.innerHTML += `${symbolArrow}` // Добавляем стрелку
}

setInterval(updateNumber, 1000)
