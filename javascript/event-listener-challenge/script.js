// #1
function hexColor() {
  const colorDisplay = document.querySelector(".displayed-color");

  if (document.body.style.backgroundColor !== "white") {
    document.body.style.backgroundColor = "white";
    document.querySelector("button").innerText = "change background color";
    colorDisplay.innerText = "";
  } else {
    const randomColor =
      "#" +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0");

    document.body.style.backgroundColor = randomColor;
    document.querySelector("button").innerText = "change background white";
    colorDisplay.innerText = randomColor.toUpperCase();
  }
}

// #2
// button = document.createElement("button");
// button.innerText = "tell me a joke";
// const jokeContainer = document.createElement("ol");

// button.addEventListener("click", () => {
//   fetch("https://v2.jokeapi.dev/joke/Any")
//     .then((res) => res.json())
//     .then((data) => {
//       const jokeContent = document.createElement("li");
//       if (data.type === "single") {
//         jokeContent.innerText = data.joke;
//       } else {
//         jokeContent.innerText = `${data.setup} ... ${data.delivery}`;
//       }
//       jokeContainer.append(jokeContent);
//       console.log(data);
//     });
// });

// const clear = document.createElement("button");
// clear.innerText = "Clear jokes";
// document.body.appendChild(clear);

// clear.addEventListener("click", () => {
//   jokeContainer.innerHTML = "";
//   console.clear();
// });

// document.body.appendChild(button);
// document.body.appendChild(jokeContainer);
// document.body.appendChild(clear);

button = document.createElement("button");
button.innerText = "tell me a joke";
const jokeContainer = document.createElement("ol");

button.addEventListener("click", () => {
  fetch("https://v2.jokeapi.dev/joke/Any")
    .then((res) => res.json())
    .then((data) => {
      const jokeContent = document.createElement("li");
      if (data.category === "Dark") {
        jokeContent.innerText = "unable to show joke";
      } else {
        if (data.type === "single") {
          jokeContent.innerText = data.joke;
        } else {
          jokeContent.innerText = `${data.setup} ... ${data.delivery}`;
        }
      }
      jokeContainer.append(jokeContent);
      console.log(data);
    });
});

const clear = document.createElement("button");
clear.innerText = "Clear jokes";
document.body.appendChild(clear);

clear.addEventListener("click", () => {
  jokeContainer.innerHTML = "";
  console.clear();
});

document.body.appendChild(button);
document.body.appendChild(jokeContainer);
document.body.appendChild(clear);
