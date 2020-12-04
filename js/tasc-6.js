let total = 0

while (true) {
  let userInput = prompt("Введите число.")

  if (userInput === null) {
    alert("Отменено пользователем")
    break
  }

  userInput = Number(userInput)
  const notANumber = Number.isNaN(userInput)

  if (notANumber) {
    alert("Вы ввели не число")
    continue
  }

  total += userInput
}
console.log(`Общая сумма чисел равна ${total}`)
