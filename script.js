let name1 = document.querySelector("#name")
let secondName = document.querySelector("#secondName")
let email = document.querySelector("#email");
let phone = document.querySelector("#phone");
let agree = document.querySelector("#agree");
let button = document.querySelector(".send-btn");
let notify = document.querySelector(".message");
let user = document.querySelector(".user");

const form = document.querySelector(".form");
form.addEventListener("submit", (event) => {
  // Предотвращает действие браузера по умолчанию. В данном случае — отправку формы
  // https://learn.javascript.ru/default-browser-action
  event.preventDefault();
  fetch(`http://46.21.248.81:3001/user`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer: HodenkovaE'
    },
    body: JSON.stringify(

      {
        "name": name1.value,
        "secondName": secondName.value,
        "phone": phone.value,
        "email": email.value,
        "agree": agree == true
      })

  })
    .then((result) => {
      return result.json()
    })
    .then((data) => {

      if (data.message == "Неправильный формат данных") {
        notify.textContent = 'Ошибка, введите данные ещё раз'
      }
      else {
        notify.textContent = 'Ваша анкета принята'
        document.querySelector(".form").reset();
      }
    })

    name1.addEventListener('keydown', function (event) {
      notify.innerHTML =''
    })

  fetch(`http://46.21.248.81:3001/last-user`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer: HodenkovaE'
    },
  })
    .then((result) => {
      return result.json()
    })
    .then((data) => {
      user.textContent = 'Последний пользователь,который заполнил анкету: ' + data.name + ' ' + data.secondName
      console.log(data)
    })
});


