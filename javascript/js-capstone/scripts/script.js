const allNames = document.querySelector(".names-container");
let students = null;

async function fetchUsers() {
  await fetch("https://javascript-capstone-backend.onrender.com/users")
    .then((res) => res.json())
    .then((data) => {
      students = data;
      console.log(students);
      for (const user of students) {
        div = document.createElement("div");

        const p = document.createElement("p");
        p.innerText = `${user.first_name}: `;

        button1 = document.createElement("button");
        button1.innerText = "+";
        button1.classList.add("plus-button");
        button2 = document.createElement("button");
        button2.innerText = "-";
        button2.classList.add("minus-button");

        user.count = 0;
        console.log(user);

        div.appendChild(p);
        div.appendChild(button1);
        div.appendChild(button2);
        allNames.appendChild(div);
        console.log(allNames.children);

        const span = document.createElement("span");
        span.innerText = user.count;
        p.appendChild(span);

        button1.addEventListener("click", () => {
          user.count += 1;
          span.innerText = user.count;

          console.log(user.count);
          console.log(students);
        });

        button2.addEventListener("click", () => {
          if (user.count > 0) {
            user.count -= 1;
            span.innerText = user.count;

            console.log(user.count);
            console.log(students);
          }
        });
      }
    });
}
fetchUsers();

function shuffleUsers() {
  console.log(students);
  const newArray = students.map((student) => {
    return student.first_name;
  });
  const randomName = newArray[Math.floor(Math.random() * array.length)];
  console.log(newArray);
  console.log(randomName);
}

// people = ["Kaden", "Eli", "Seth", "Seth", "Jake"];
shuffleUsers();
