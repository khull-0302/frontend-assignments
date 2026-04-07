import { useState, useEffect } from "react";
// import App from "../../react-widgets-p2/src/App";
// import App from "../../react-widgets-p1/src/App";

export default function App() {
  const [people, setPeople] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    fetch(`https://www.swapi.tech/api/people?page=${page}&limit=${limit}`)
      .then((res) => res.json())
      .then((data) => {
        setPeople(data.results);
        console.log(people);
      })
      .catch((err) => {
        console.error("Get People Error: ", err);
      });
  }, [page, limit]);
  return (
    <div>
      <h1>Star Wars Characters</h1>
      <input
        type="number"
        id="page"
        value={page}
        step={1}
        max={10}
        onChange={(e) => setPage(e.target.value)}
      />

      <input
        type="number"
        id="limit"
        value={limit}
        step={1}
        min={1}
        max={100}
        onChange={(e) => setLimit(e.target.value)}
      />
      <People people={people} />
    </div>
  );
}

function People(props) {
  const [homeworlds, setHomeworlds] = useState({});

  const getHomeworld = (character) => {
    fetch(character.url)
      .then((res) => res.json())
      .then((userData) => {
        return fetch(userData.result.properties.homeworld);
      })
      .then((res) => res.json())
      .then((planetData) => {
        setHomeworlds((prev) => ({
          ...prev,
          [character.uid]: planetData.result.properties.name,
        }));
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      {props.people.map((character) => {
        return (
          <div key={character.uid}>
            <p>{character.name}</p>

            {homeworlds[character.uid] && (
              <p>Homeworld: {homeworlds[character.uid]}</p>
            )}

            <button onClick={() => getHomeworld(character)}>
              show home planet for {character.name}
            </button>
          </div>
        );
      })}
    </div>
  );
}

// export default People;
