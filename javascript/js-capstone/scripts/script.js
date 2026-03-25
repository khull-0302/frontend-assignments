const allNames = document.querySelector(".names-container");
let students = null;
const h1 = document.querySelector("h1");

async function fetchUsers() {
  await fetch("https://javascript-capstone-backend.onrender.com/users")
    .then((res) => res.json())
    .then((data) => {
      students = data;
      for (const user of students) {
        div = document.createElement("div");

        const p = document.createElement("p");
        p.innerText = `${user.first_name} ${user.last_name[0]}: `;

        button1 = document.createElement("button");
        button1.innerText = "+";
        button1.classList.add("plus-button");
        button2 = document.createElement("button");
        button2.innerText = "-";
        button2.classList.add("minus-button");

        user.count = 0;

        div.appendChild(p);
        div.appendChild(button1);
        div.appendChild(button2);
        allNames.appendChild(div);

        const span = document.createElement("span");
        span.innerText = user.count;
        p.appendChild(span);

        button1.addEventListener("click", () => {
          if (user.count < 10) {
            user.count += 1;
            span.innerText = user.count;
          }
        });

        button2.addEventListener("click", () => {
          if (user.count > 0) {
            user.count -= 1;
            span.innerText = user.count;
          }
        });
      }
    });
}
fetchUsers();

async function shuffleUsers() {
  // await shuffleAnimation();
  let weight = [];
  console.log(students);
  for (let student of students) {
    const studentName = student.first_name + " " + student.last_name[0];
    console.log(studentName);
    for (let i = 0; i < student.count; i++) {
      weight.push(studentName);
    }
  }
  if (weight.length === 0) {
    return;
  }
  await shuffleAnimation();
  const randomName = weight[Math.floor(Math.random() * weight.length)];
  h1.innerText = randomName;

  const nameTag = document.querySelectorAll(".names-container div");
  nameTag.forEach((div) => {
    if (div.innerText.includes(randomName)) {
      div.style.color = "red";
    } else {
      div.style.color = "";
    }
  });
}

function shuffleAnimation() {
  return new Promise((resolve) => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * students.length);
      const student = students[randomIndex];

      h1.innerText = student.first_name + " " + student.last_name[0];
    }, 200);

    setTimeout(() => {
      clearInterval(interval);
      resolve();
    }, 4000);
  });
}
