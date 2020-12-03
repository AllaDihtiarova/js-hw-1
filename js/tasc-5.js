let userInput = prompt("Укажите страну доставки товара.")
let country = userInput.toLowerCase()
let price

// if (userInput === null) {
//   alert("Отменено пользователем")
// } else {
//   alert("Укажите страну доставки товара.")
// }

switch (country) {
  case "китай":
    price = 100
    break

  case "чили":
    price = 250
    break

  case "австралия":
    price = 170
    break

  case "индия":
    price = 80
    break

  case "ямайка":
    price = 120
    break

  default:
    alert("В вашей стране доставка не доступна")
    break
}

alert(`Доставка в ${userInput} будет стоить ${price} кредитов`)
