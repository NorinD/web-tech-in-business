function valFname() {
    const name = document.getElementById("fname").value;
    const regex = /^[a-zA-ZА-Яа-я\s]{2,22}$/;
  
    if (regex.test(name)) {
      document.getElementById("fname-err").innerHTML = "";
      return true;
    } else {
      document.getElementById("fname-err").style.display = "block";
      document.getElementById("fname-err").innerHTML =
        "Имя должно содержать буквы, количество от 2 до 22";
      return false;
    }
}
  
function valLname() {
    const lastName = document.getElementById("lname").value;
    const regex = /^[a-zA-ZА-Яа-я\s]{2,30}$/;

  if (regex.test(lastName)) {
    document.getElementById("lname-err").innerHTML = "";
    return true;
  } else {
    document.getElementById("lname-err").style.display = "block";
    document.getElementById("lname-err").innerHTML =
      "Имя должно содержать буквы, количество от 2 до 30";
    return false;
  }
}

function valTel() {
    const tel = document.getElementById("tel").value;
    const regex = /^(\+7)?[\s][489][0-9]{2}[\s][0-9]{3}[\s][0-9]{2}[\s][0-9]{2}$/;

  if (regex.test(tel)) {
    document.getElementById("tel-err").innerHTML = "";
    return true;
  } else {
    document.getElementById("tel-err").style.display = "block";
    document.getElementById("tel-err").innerHTML =
      "Допустимый формат номера: +7 982 829 29 24";
    return false;
  }
}
  
function valType() {
    const type = document.getElementById("product_type").value;

    if (type == "program" ||
        type == "os" ||
        type == "pc" ||
        type == "internet"
        ) {
        document.getElementById("type-err").innerHTML = "";
        return true;
    } else {
        document.getElementById("type-err").style.display = "block";
        document.getElementById("type-err").innerHTML =
        "Выберите тип проблемы";
        return false;
    }
}
  
function valProblem() {
    const problem = document.getElementById("product_problem").value;
    const regex = /^[a-zA-ZА-Яа-я0-9\s]{10,70}$/;

    if (regex.test(problem)) {
        document.getElementById("problem-err").innerHTML = "";
        return true;
    } else {
        document.getElementById("problem-err").style.display = "block";
        document.getElementById("problem-err").innerHTML =
        "Кратко опишите проблему. От 10 до 70 символов";
        return false;
    }
}
  
function getSummary() {
  const fName = document.getElementById("fname").value;
  const lName = document.getElementById("lname").value;
  const tel = document.getElementById("tel").value;
  const type = document.getElementById("product_type").value;
  const problem = document.getElementById("product_problem").value;


  if (
    fName != "" &&
    lName != "" &&
    valTel() === true &&
    valType() === true && 
    problem != ""
  ) {
    document.getElementById("product-form_content").remove();
    document.getElementById("summary_contents").innerHTML += "Ваша заявка принята!</br>";
    document.getElementById("summary_contents").innerHTML += "Имя: " + fName + "</br>";
    document.getElementById("summary_contents").innerHTML += "Фамилия: " + lName + "</br>";
    document.getElementById("summary_contents").innerHTML += "Телефон: " + tel + "</br>";
    document.getElementById("summary_contents").innerHTML += "Тип проблемы: " + type + "</br>";
    document.getElementById("summary_contents").innerHTML += "Описание: " + problem + "</br>";
  } else {
    document.getElementById("val-err").innerHTML = "Заполните все поля";
    document.getElementById("val-err").style.fontSize = "14px";
  }
}
  
// $('#promo_button').click(function(){
//   $('#animation').fadeIn(2000);
//   $('.animation').css('display', 'flex');
// })

// $('#close').click(function(){
//   $('#animation').fadeOut(2000);
// })
  