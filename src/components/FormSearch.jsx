import { useContext } from "react";
import { useState } from "react";
import { DataContext } from "../context/DataContext";

const FormSearch = () => {
  const [title, setTitle] = useState("");
  const { setQuery, error } = useContext(DataContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    setQuery(title);
  };

  return (
    <>
      <div className="form-search ">
        <h1>
          <button
            onClick={() => {
              location.reload();
            }}
            className="reset"
          >
            Movix
          </button>
        </h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Titulo de Pelicula"
            onChange={(e) => setTitle(e.target.value)}
          />
          <input type="submit" value="Buscar" />
        </form>
      </div>
      <div>{error && <p className="error ">No se encontró resultados </p>}</div>
    </>
  );
};

export default FormSearch;
