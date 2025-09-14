import { createSignal } from "solid-js";
import { render } from "solid-js/web";

const App = () => {
  const films = [
    "Avatar",
    "Blade Runner",
    "Cinderella",
    "Die Hard",
    "E.T. the Extra-Terrestrial",
    "Frozen",
    "Godfather, The",
    "Harry Potter and the Philosopher's Stone",
    "Inception",
    "Jurassic Park",
    "King Kong",
    "Lion King, The",
    "Matrix, The",
    "Nemo",
    "Oldboy",
    "Pulp Fiction",
    "Queen, The",
    "Raiders of the Lost Ark",
    "Shawshank Redemption",
    "Titanic",
    "Up",
    "V for Vendetta",
    "Wizard of Oz",
    "X-Men",
    "Yojimbo",
    "Zootopia",
  ];

  const [query, setQuery] = createSignal("");

  const filteredFilms = () =>
    films.filter((film) =>
      film.toLowerCase().includes(query().toLowerCase())
    );

  const bodyStyle = {
    height: "100vh",
    width: "100%",
    margin: 0,
    overflow: "hidden",
    "background-image": "linear-gradient(to top, #f77062 0%, #fe5196 100%)",
  };

  const inputStyle = {
    width: "250px",
    margin: "1rem",
    "margin-bottom": 0,
    "margin-right": 0,
  };

  const navStyle = {
    width: "250px",
    margin: "1rem",
    "margin-bottom": 0,
    "margin-right": 0,
    display: "flex",
    "flex-direction": "column",
    border: "1px solid var(--color-border)",
    "border-top": "none",
    "border-bottom": "none",
    "background-color": "#e9e9e9",
    "padding-right": "8px",
  };

  const linkStyle = {
    "text-decoration": "none",
    padding: "0.5rem",
    display: "block",
    "border-top": "1px solid var(--color-border)",
    "border-bottom": "1px solid var(--color-border)",
    color: "#616161",
    cursor: "pointer",
  };

  return (
    <div style={bodyStyle}>
      <input
        class="inputSearch"
        type="text"
        placeholder="Search a film..."
        style={inputStyle}
        value={query()}
        onInput={(e) => setQuery(e.currentTarget.value)}
      />
      <input
        type="reset"
        style={inputStyle}
        onClick={() => setQuery("")}
      />
      <nav style={navStyle}>
        {filteredFilms().map((film) => (
          <a
            style={linkStyle}
            onClick={() => setQuery(film)}
          >
            {film}
          </a>
        ))}
      </nav>
    </div>
  );
};

const root = document.createElement("div");
document.body.appendChild(root);
render(() => <App />, root);

export default App;
