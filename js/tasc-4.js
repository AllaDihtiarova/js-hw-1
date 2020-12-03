const credits = 23580
const pricePerDroid = 3000
const userInput = prompt("Введите колличество дроидов, которые хотите купить.")
const totalPrice = pricePerDroid * userInput
let message

if (userInput === null) {
  message = "Отменено пользователем!"
} else if (totalPrice > credits) {
  message = `Недостаточно средств на счету! Вам не хватает ${totalPrice - credits} кредитов`
} else if (totalPrice <= credits && userInput >= 0) {
  message = `Вы купили ${userInput} дроидов, на счету осталось ${credits - totalPrice} кредитов`
} else {
  message = "Вы ввели неправильный запрос."
}

console.log(message)
