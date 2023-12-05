import { useState, useEffect } from "react";

export function App() {
  type TLocal = {
    name: string;
    temp: number;
    img: string;
  };

  const [query, setQuery] = useState("São Paulo");
  const [search, setSearch] = useState("");
  const [local, setlocal] = useState<TLocal>({
    name: "Not found",
    temp: 0,
    img: "https://openweathermap.org/img/wn/02d@2x.png",
  });

  useEffect(() => {
    async function weather() {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${
          import.meta.env.VITE_REACT_API_KEY
        }&lang=pt_br&units=metric`
      );
      const data = await res.json();

      const object = {
        name: data?.name,
        temp: data?.main.temp,
        img: `https://openweathermap.org/img/wn/${
          `${data?.weather[0].icon}` || "02d"
        }@2x.png`,
      };

      setlocal(object);
    }
    weather();
  }, [query]);

  useEffect(() => {}, [local]);

  function prevent(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setQuery(search);
  }

  return (
    <main>
      <h1 className="title">React Weather</h1>

      <section className="sectionForm">
        <form method="get" onSubmit={prevent}>
          <input
            required
            type="text"
            id="inputLocale"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit" className="btnLocale">
            Search
          </button>
        </form>
      </section>

      <section className="sectionWeather">
        <div className="weatherData">
          <h2>{local.name}</h2>
          <span>{`${Math.round(local.temp)}°C` || "0°C"}</span>
        </div>

        <img src={local.img} alt="icon" />
      </section>
    </main>
  );
}
