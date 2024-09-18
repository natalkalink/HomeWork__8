// Задача 1. Дано масив, який містить оцінки з К предметів.
// Знайти середній бал і з’ясувати до якої категорії він
// відноситься (відмінник,
// двійочник (має хоча би одну двійку),
// хорошист (оцінки добре і відмінно),
// трійочник(є хоча би одна трійка)).


function findMinimumScore(scores) {
	let minimum = scores[0]
	for (let i = 1; i < scores.length; i++) {
		if (scores[i] < minimum) minimum = scores[i]
	}
	return minimum
}

function determineCategory(scores) {

	const minimumScore = findMinimumScore(scores)

	let category
	switch (minimumScore) {
		case 2:
			category = 'Двійочник'
			break
		case 3:
			category = 'Трійочник'
			break
		case 4:
			category = 'Хорошист'
			break
		case 5:
			category = 'Відмінник'
			break
		default:
			throw new Error('Такої оцінки не може бути')
	}
	return category
}

const numSubjects = parseInt(prompt(`Введіть кількість предметів:`))

const grades = []

for (let i = 0; i < numSubjects; i++) {
	const grade = parseInt(prompt(`Введіть оцінку (1-5) з предмету ${i + 1}:`))

	if (grade >= 1 && grade <= 5) {
		grades.push(grade)
	} else {
		alert('Оцінка повинна бути в межах від 1 до 5.')
		i--
	}
}

let total = 0

for (let i = 0; i < grades.length; i++) {
	total += grades[i]
}
const average = total / grades.length


const studentCategory = determineCategory(grades)


document.write(`Середній бал: ${average.toFixed(2)}<br>`)
document.write(`Категорія: ${studentCategory}`)


// ------------------------------------------
// function studentCategory(grades) {
// 	let total = 0;
// 	let minGrade = Math.min(...grades)


// 	for (let i = 0; i < grades.length; i++) {
// 		total += grades[i]
// 	}

// 	const average = total / grades.length

// 	let category
// 	if (minGrade === 2) {
// 		category = 'двійочник'
// 	} else if (minGrade === 3) {
// 		category = 'трійочник'
// 	} else if (minGrade === 4) {
// 		category = 'хорошист'
// 	} else if (minGrade === 5) {
// 		category = 'відмінник'
// 	}

// 	return {
// 		average: average,
// 		category: category
// 	}
// }


// const numSubjects = parseInt(prompt("Введіть кількість предметів:"))

// const grades = []

// for (let i = 0; i < numSubjects; i++) {
// 	const grade = parseInt(prompt(`Введіть оцінку (1-5) з предмету ${i + 1}:`))
// 	grades.push(grade)
// }

// const result = studentCategory(grades)

// document.write(`Середній бал: ${result.average.toFixed(2)}<br>`)
// document.write(`Категорія: ${result.category}`)

