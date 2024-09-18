// Задача 5. Дано послідовність оцінок учня. Підрахувати кількість:
// 1)	двійок
// 2)	кількість хороших оцінок (добре, відмінно);
// 3)	кількість оцінок, які нижче середнього.


const numSubjects = parseInt(prompt("Введіть кількість предметів:"))

const grades = []


for (let i = 0; i < numSubjects; i++) {
	const grade = parseInt(prompt(`Введіть оцінку (1-5) з предмету ${i + 1}:`))

	if (grade >= 1 && grade <= 5) {
		grades.push(grade)
	} else {
		alert('Оцінка повинна бути в межах від 1 до 5')
		i--
	}
}

let total = 0
for (let i = 0; i < grades.length; i++) {
	total += grades[i]
}
const average = total / grades.length


let countTwos = 0
let countGoodGrades = 0
let countBelowAverage = 0

for (let i = 0; i < grades.length; i++) {
	const grade = grades[i]


	if (grade === 2) {
		countTwos++
	}

	if (grade >= 4) {
		countGoodGrades++
	}

	if (grade < average) {
		countBelowAverage++
	}
}


document.write(`Кількість двійок: ${countTwos}<br>`)
document.write(`Кількість хороших оцінок (4 та 5): ${countGoodGrades}<br>`)
document.write(`Кількість оцінок, які нижчі середнього: ${countBelowAverage}`)