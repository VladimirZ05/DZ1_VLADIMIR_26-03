const email = prompt("Введите адрес Gmail почты:");
const regExp = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

if (regExp.test(email)) {
  console.log("Адрес почты валидный");
} else {
  console.log("Адрес почты невалидный");
}
