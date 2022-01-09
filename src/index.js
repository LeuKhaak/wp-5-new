import "./style.scss";
const sayHello = () => console.log("hello!!!");
sayHello();

const text1 = "Hello, friends!";

// создаем параграф
const p = document.createElement("p");
p.textContent =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, nobis repellendus? Cupiditate iure voluptates voluptate voluptatum eligendi ut praesentium sapiente eum aliquam et rerum omnis, veritatis sunt beatae magnam minima!";

// создаем элемент заголовка
const heading = document.createElement("h1");
heading.textContent = `Wow! ${text1}.`;
heading.classList.add("title");

// добавляем параграф и заголовок в DOM
const root = document.querySelector("#root");
root.append(heading, p);
