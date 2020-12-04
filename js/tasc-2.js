const total = 100
let ordered = 50
if (ordered <= total && ordered > 0) {
  console.log("Заказ оформлен, с вами свяжется менеджер")
} else if (ordered <= 0) {
  console.log("Вы указали недопустимое колличество.")
} else if (ordered > total) {
  console.log("На складе недостаточно твоаров!")
} else {
  console.log("Вы не указали колличество")
}

ordered = 0
if (ordered <= total && ordered > 0) {
  console.log("Заказ оформлен, с вами свяжется менеджер")
} else if (ordered <= 0) {
  console.log("Вы указали недопустимое колличество.")
} else if (ordered > total) {
  console.log("На складе недостаточно твоаров!")
} else {
  console.log("Вы не указали колличество")
}

ordered = -1
if (ordered <= total && ordered > 0) {
  console.log("Заказ оформлен, с вами свяжется менеджер")
} else if (ordered <= 0) {
  console.log("Вы указали недопустимое колличество.")
} else if (ordered > total) {
  console.log("На складе недостаточно твоаров!")
} else {
  console.log("Вы не указали колличество")
}

ordered = 130
if (ordered <= total && ordered > 0) {
  console.log("Заказ оформлен, с вами свяжется менеджер")
} else if (ordered <= 0) {
  console.log("Вы указали недопустимое колличество.")
} else if (ordered > total) {
  console.log("На складе недостаточно твоаров!")
} else {
  console.log("Вы не указали колличество")
}

ordered = "qwe"
if (ordered <= total && ordered > 0) {
  console.log("Заказ оформлен, с вами свяжется менеджер")
} else if (ordered <= 0) {
  console.log("Вы указали недопустимое колличество.")
} else if (ordered > total) {
  console.log("На складе недостаточно твоаров!")
} else {
  console.log("Вы не указали колличество")
}
