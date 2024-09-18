// Задача 2. Дано масив, який зберігає кількість відвідувачів магазину протягом тижня. 
// Вивести на екран: номери днів, протягом яких кількість відвідувачів була меншою за 20; 
// номери днів, коли кількість відвідувачів була мінімальною; 
// номери днів, коли кількість відвідувачів була максимальною;
//загальну кількість клієнтів у робочі дні та окремо загальну кількість днів на вихідних.


function getVisitorsNumberPerWeek() {
	const visitorsNumbers = []

	// відвідувачів для кожного дня (7 днів)
	for (let i = 1; i <= 7; i++) {
		const visitorsNumber = parseInt(prompt(`Введіть кількість відвідувачів магазину для дня №${i}`, '30'))
		visitorsNumbers.push(visitorsNumber)
	}
	return visitorsNumbers
}

// кількості відвідувачів за типом дня (робочі/вихідні)
function getTotalVisitorsNumberByDayType(visitors, startDay, endDay) {
	let total = 0
	for (let i = startDay; i <= endDay; i++) {
		total += visitors[i]// Додаємо кількість відвідувачів у відповідні дні
	}
	return total
}

let visitorsNumbers = getVisitorsNumberPerWeek()

let dayWithLessThan20 = []
let minVisitedDays = []
let maxVisitedDays = []

const minWorkingDayNumber = 0 // Пн
const maxWorkingDayNumber = 4// Пт
const maxWeekendDayNumber = 6 // Нд

//мінімальну та максимальну кількість відвідувачів
let minVisitors = visitorsNumbers[0]
let maxVisitors = visitorsNumbers[0]

for (let i = 1; i < visitorsNumbers.length; i++) {
	if (visitorsNumbers[i] < minVisitors) {
		minVisitors = visitorsNumbers[i]
	}
	if (visitorsNumbers[i] > maxVisitors) {
		maxVisitors = visitorsNumbers[i]
	}
}

for (let i = 0; i < visitorsNumbers.length; i++) {
	if (visitorsNumbers[i] < 20) {
		dayWithLessThan20.push(i + 1) // додаємо 1, щоб дні були 1-7
	}

	if (visitorsNumbers[i] === minVisitors) {
		minVisitedDays.push(i + 1)
	}

	if (visitorsNumbers[i] === maxVisitors) {
		maxVisitedDays.push(i + 1)
	}
}

document.write(`
	<div>Результат розрахунку:
		 <ol>
			<li>кількість відвідувачів була меншою за 20 у дні № ${dayWithLessThan20}</li>
			<li>кількість відвідувачів була мінімальною у дні № ${minVisitedDays}</li>
			<li>кількість відвідувачів була максимальною у дні № ${maxVisitedDays}</li>
			<li>загальна кількість клієнтів у робочі дні: ${getTotalVisitorsNumberByDayType(visitorsNumbers, minWorkingDayNumber, maxWorkingDayNumber)}<br>
			  та загальна кількість клієнтів на вихідних: ${getTotalVisitorsNumberByDayType(visitorsNumbers, maxWorkingDayNumber + 1, maxWeekendDayNumber)}</li>
		 </ol>
	</div>
	`)

