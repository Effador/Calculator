let StringVar = "0";
let StringVar2 = "";
let Sign = "";
let AnswerTest = 0;
const output = document.querySelector("#display");
const one = document.querySelector("#n1");
const two = document.querySelector("#n2");
const three = document.querySelector("#n3");
const four = document.querySelector("#n4");
const five = document.querySelector("#n5");
const six = document.querySelector("#n6");
const seven = document.querySelector("#n7");
const eight = document.querySelector("#n8");
const nine = document.querySelector("#n9");
const zero = document.querySelector("#n0");
const clear = document.querySelector("#C");
const backspace = document.querySelector("#bs");
const point = document.querySelector("#dot");
const plusButton = document.querySelector("#plus");
const minusButton = document.querySelector("#minus");
const multiplyButton = document.querySelector("#multiply");
const divideButton = document.querySelector("#divide");
const rootButton = document.querySelector("#root");
const supButton = document.querySelector("#sup");
const equalsButton = document.querySelector("#equals");

function render() {
  output.textContent = StringVar + Sign + StringVar2;
  if (Sign === "^(1/") {
    output.textContent += ")";
  }
  console.log(AnswerTest);
}

one.addEventListener("click", function () {
  if (AnswerTest === 1) {
    StringVar = "0";
    AnswerTest = 0;
  }
  if (StringVar.length + StringVar2.length + Sign.length <= 16) {
    if (Sign === "") {
      if (StringVar === "0") {
        StringVar = "";
      } else if (StringVar === "-0") {
        StringVar = "-";
      }
      StringVar += "1";
    } else {
      StringVar2 += "1";
    }
  }
  render();
});
two.addEventListener("click", function () {
  if (AnswerTest === 1) {
    StringVar = "0";
    AnswerTest = 0;
  }
  if (StringVar.length + StringVar2.length + Sign.length <= 16) {
    if (Sign === "") {
      if (StringVar === "0") {
        StringVar = "";
      } else if (StringVar === "-0") {
        StringVar = "-";
      }
      StringVar += "2";
    } else {
      StringVar2 += "2";
    }
  }
  render();
});
three.addEventListener("click", function () {
  if (AnswerTest === 1) {
    StringVar = "0";
    AnswerTest = 0;
  }
  if (StringVar.length + StringVar2.length + Sign.length <= 16) {
    if (Sign === "") {
      if (StringVar === "0") {
        StringVar = "";
      } else if (StringVar === "-0") {
        StringVar = "-";
      }
      StringVar += "3";
    } else {
      StringVar2 += "3";
    }
  }
  render();
});
four.addEventListener("click", function () {
  if (AnswerTest === 1) {
    StringVar = "0";
    AnswerTest = 0;
  }
  if (StringVar.length + StringVar2.length + Sign.length <= 16) {
    if (Sign === "") {
      if (StringVar === "0") {
        StringVar = "";
      } else if (StringVar === "-0") {
        StringVar = "-";
      }
      StringVar += "4";
    } else {
      StringVar2 += "4";
    }
  }
  render();
});
five.addEventListener("click", function () {
  if (AnswerTest === 1) {
    StringVar = "0";
    AnswerTest = 0;
  }
  if (StringVar.length + StringVar2.length + Sign.length <= 16) {
    if (Sign === "") {
      if (StringVar === "0") {
        StringVar = "";
      } else if (StringVar === "-0") {
        StringVar = "-";
      }
      StringVar += "5";
    } else {
      StringVar2 += "5";
    }
  }
  render();
});
six.addEventListener("click", function () {
  if (AnswerTest === 1) {
    StringVar = "0";
    AnswerTest = 0;
  }
  if (StringVar.length + StringVar2.length + Sign.length <= 16) {
    if (Sign === "") {
      if (StringVar === "0") {
        StringVar = "";
      } else if (StringVar === "-0") {
        StringVar = "-";
      }
      StringVar += "6";
    } else {
      StringVar2 += "6";
    }
  }
  render();
});
seven.addEventListener("click", function () {
  if (AnswerTest === 1) {
    StringVar = "0";
    AnswerTest = 0;
  }
  if (StringVar.length + StringVar2.length + Sign.length <= 16) {
    if (Sign === "") {
      if (StringVar === "0") {
        StringVar = "";
      } else if (StringVar === "-0") {
        StringVar = "-";
      }
      StringVar += "7";
    } else {
      StringVar2 += "7";
    }
  }
  render();
});
eight.addEventListener("click", function () {
  if (AnswerTest === 1) {
    StringVar = "0";
    AnswerTest = 0;
  }
  if (StringVar.length + StringVar2.length + Sign.length <= 16) {
    if (Sign === "") {
      if (StringVar === "0") {
        StringVar = "";
      } else if (StringVar === "-0") {
        StringVar = "-";
      }
      StringVar += "8";
    } else {
      StringVar2 += "8";
    }
  }
  render();
});
nine.addEventListener("click", function () {
  if (AnswerTest === 1) {
    StringVar = "0";
    AnswerTest = 0;
  }
  if (StringVar.length + StringVar2.length + Sign.length <= 16) {
    if (Sign === "") {
      if (StringVar === "0") {
        StringVar = "";
      } else if (StringVar === "-0") {
        StringVar = "-";
      }
      StringVar += "9";
    } else {
      StringVar2 += "9";
    }
  }
  render();
});
zero.addEventListener("click", function () {
  if (AnswerTest === 1) {
    StringVar = "0";
    AnswerTest = 0;
  }
  if (StringVar.length + StringVar2.length + Sign.length <= 16) {
    if (Sign === "") {
      switch (StringVar) {
        case "0":
          break;
        case "-0":
          break;
        default:
          StringVar += 0;
          render();
          break;
      }
    } else {
      switch (StringVar2) {
        case "0":
          break;
        default:
          StringVar2 += 0;
          render();
          break;
      }
    }
  }
  render();
});
point.addEventListener("click", function () {
  if (AnswerTest === 1) {
    StringVar = "0";
    AnswerTest = 0;
  }
  if (StringVar.length + StringVar2.length + Sign.length <= 16) {
    if (Sign === "") {
      switch (StringVar.includes(".")) {
        case true:
          break;
        default:
          StringVar += ".";
          render();
      }
    } else {
      switch (StringVar2.includes(".")) {
        case true:
          break;
        default:
          StringVar2 += ".";
          render();
      }
    }
  }
  render();
});
backspace.addEventListener("click", function () {
  if (AnswerTest === 1) {
    StringVar = "0";
    AnswerTest = 0;
  }
  if (Sign === "") {
    switch (StringVar.length) {
      case 1:
        StringVar = "0";
        render();
        break;
      default:
        StringVar = StringVar.slice(0, StringVar.length - 1);
        render();
        break;
    }
  } else {
    switch (StringVar2.length) {
      case 0:
        Sign = "";
        render();
        break;
      case 1:
        StringVar2 = "";
        render();
        break;
      default:
        StringVar2 = StringVar2.slice(0, StringVar2.length - 1);
        render();
        break;
    }
  }
  render();
});
clear.addEventListener("click", function () {
  StringVar = "0";
  StringVar2 = "";
  Sign = "";
  render();
});
plusButton.addEventListener("click", function () {
  if (StringVar.length + StringVar2.length + 1 <= 16) {
    AnswerTest = 0;
    Sign = "+";
    if (StringVar.at(-1) === ".") {
      StringVar = StringVar.slice(0, StringVar.length - 1);
    }
  }
  render();
});
minusButton.addEventListener("click", function () {
  if (StringVar.length + StringVar2.length + 1 <= 16) {
    AnswerTest = 0;
    if (StringVar === "0") {
      StringVar = "-" + StringVar;
    } else {
      Sign = "-";
    }
    if (StringVar.at(-1) === ".") {
      StringVar = StringVar.slice(0, StringVar.length - 1);
    }
  }
  render();
});
multiplyButton.addEventListener("click", function () {
  if (StringVar.length + StringVar2.length + 1 <= 16) {
    AnswerTest = 0;
    Sign = "*";
    if (StringVar.at(-1) === ".") {
      StringVar = StringVar.slice(0, StringVar.length - 1);
    }
  }
  render();
});
divideButton.addEventListener("click", function () {
  if (StringVar.length + StringVar2.length + 1 <= 16) {
    AnswerTest = 0;
    Sign = "/";
    if (StringVar.at(-1) === ".") {
      StringVar = StringVar.slice(0, StringVar.length - 1);
    }
  }
  render();
});
rootButton.addEventListener("click", function () {
  if (StringVar.length + StringVar2.length + 4 <= 16) {
    AnswerTest = 0;
    Sign = "^(1/";
    if (StringVar.at(-1) === ".") {
      StringVar = StringVar.slice(0, StringVar.length - 1);
    }
  }
  render();
});
supButton.addEventListener("click", function () {
  if (StringVar.length + StringVar2.length + 1 <= 16) {
    AnswerTest = 0;
    Sign = "^";
    if (StringVar.at(-1) === ".") {
      StringVar = StringVar.slice(0, StringVar.length - 1);
    }
  }
  render();
});
equalsButton.addEventListener("click", function () {
  if (StringVar2.at(-1) === ".") {
    StringVar2 = StringVar2.slice(0, StringVar2.length - 1);
  }
  if (StringVar2 === "") {
    Sign = "";
  }
  switch (Sign) {
    case "+":
      StringVar = Number(StringVar) + Number(StringVar2);
      StringVar2 = "";
      Sign = "";
      break;
    case "-":
      StringVar = Number(StringVar) - Number(StringVar2);
      StringVar2 = "";
      Sign = "";
      break;
    case "*":
      StringVar = Number(StringVar) * Number(StringVar2);
      StringVar2 = "";
      Sign = "";
      break;
    case "/":
      switch (StringVar2) {
        case "0":
          StringVar = "Error";
          StringVar2 = "";
          Sign = "";
          break;
        default:
          StringVar = Number(StringVar) / Number(StringVar2);
          StringVar2 = "";
          Sign = "";
          break;
      }
      break;
    case "^(1/":
      StringVar = Number(StringVar) ** (1 / Number(StringVar2));
      StringVar2 = "";
      Sign = "";
      break;
    case "^":
      StringVar = Number(StringVar) ** Number(StringVar2);
      StringVar2 = "";
      Sign = "";
      break;
  }
  if (String(StringVar).includes(".") && StringVar<=2**53) {
    StringVar = Number(StringVar).toFixed(
      16 - (String(Math.floor(StringVar)).length + 1),
    );
    StringVar = String(StringVar);
  }
  if (String(StringVar).length > 16) {
    StringVar = "Number is too big!";
  } else {
    StringVar = String(StringVar);
  }
  AnswerTest = 1;
  render();
});
render();