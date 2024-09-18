// Задача 3. Дано масив імен учнів. З’ясувати скільки разів зустрічається ім’я «Іван».


let numberOfStudents = parseInt(prompt('Введіть кiлькiсть учнів', '5'))

let students = []

for (let i = 0; i < numberOfStudents; i++) {
	let name = prompt('Введіть ім\'я учня ' + (i + 1) + ':')
	students.push(name)
}

let count = 0

for (let i = 0; i < students.length; i++) {
	if (students[i] === 'Іван') {
		count++
	}
}
document.write(`Ім'я Іван зустрічається ${count} раз(и)`)



// let students = ['Іван', 'Олексій', 'Марія', 'Іван', 'Ольга', 'Іван']
// let count = 0
// for (let i = 0; i < students.length; i++) {
// 	if (students[i] === 'Іван') {
// 		count++
// 	}
// }
// document.write(`Ім'я Іван зустрічається ${count} раз(и)`)
