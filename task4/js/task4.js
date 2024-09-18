// Задача 7. Дано послідовність платіжок протягом року. Знайти сумарну кількість грошей за:
// за весь рік;
// у першій половині року;
// у другій половині року;
// за літо;
// за ІІ квартал;
// за парні місяці (з парними номерами);
// за місяці, які є початковими у сезоні (весна, літо, осінь, зима).


function getPaymentsPerYear() {
	const payments = []
	for (let i = 1; i <= 12; i++) {
		const payment = parseFloat(prompt(`Введіть суму платежів для місяця №${i}`, '123.45'))
		payments.push(payment)
	}
	return payments
}

function getSumInRange(payments, startMonth, endMonth, step = 1) {
	let sum = 0
	for (let i = startMonth; i <= endMonth; i += step) {
		sum += payments[i - 1]
	}
	return sum
}

function displayStatistics() {
	const paymentsPerYear = getPaymentsPerYear()

	// Подсчитываем суммы для каждого периода
	const moneyForYear = getSumInRange(paymentsPerYear, 1, 12)
	const firstHalf = getSumInRange(paymentsPerYear, 1, 6)
	const secondHalf = getSumInRange(paymentsPerYear, 7, 12)
	const forSummer = getSumInRange(paymentsPerYear, 6, 8)
	const forSecondQuarter = getSumInRange(paymentsPerYear, 4, 6)
	const forEvenMonths = getSumInRange(paymentsPerYear, 2, 12, 2)
	const forStartSeasons = getSumInRange(paymentsPerYear, 3, 12, 3)


	document.write(`
		 <div>Статистика платежів за рік:
			  <ol>
					<li>Сумарна кількість грошей за весь рік: ${moneyForYear.toFixed(2)}грн.</li>
					<li>Сумарна кількість грошей у першій половині року: ${firstHalf.toFixed(2)}грн.</li>
					<li>Сумарна кількість грошей у другій половині року: ${secondHalf.toFixed(2)}грн.</li>
					<li>Сумарна кількість грошей за літо: ${forSummer.toFixed(2)}грн.</li>
					<li>Сумарна кількість грошей за ІІ квартал: ${forSecondQuarter.toFixed(2)}грн.</li>
					<li>Сумарна кількість грошей за парні місяці: ${forEvenMonths.toFixed(2)}грн.</li>
					<li>Сумарна кількість грошей за місяці, які є початковими у сезоні: ${forStartSeasons.toFixed(2)}грн.</li>
			  </ol>
		 </div>
	`)
}

// Запуск обробки для завантаження стор.
window.onload = displayStatistics