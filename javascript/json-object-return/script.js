// #1
const usersObj = {
  results: [
    { id: 1, name: "Kaden", email: "123@gmail.com", password: "test123!" },
    { id: 2, name: "John", email: "abc@gmail.com", password: "abc123!" },
    { id: 3, name: "Bob", email: "!#$@gmail.com", password: "!#$123!" },
  ],
};

for (let user of usersObj.results) {
  console.log(`Hello, ${user.name} your email is ${user.email}`);
}

// #2

const reqObject = new XMLHttpRequest();

const fetchData = () => {
  return new Promise((resolve, reject) => {
    reqObject.open("GET", "https://www.swapi.tech/api/planets/1000");
    reqObject.responseType = "json";
    reqObject.send();
    reqObject.onload = () => {
      console.log(reqObject);
      if (reqObject.status === 200) {
        resolve(reqObject.response.results);
      } else {
        reject("error cannot fetch data");
      }
      console.log(reqObject.response.results[0]);
    };
    reqObject.onerror = () => {
      reject("network error");
    };
  });
};

fetchData()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
