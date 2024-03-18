import { useFetch } from "../hooks/useFetch";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";

import DefaultImage from "/NoImage.png";

const SingleMovie = () => {
  const { id } = useParams();
  const { isLoading, data } = useFetch(`&i=${id}`);

  if (isLoading) {
    return <div className="loading"></div>;
  }

  const { Poster, Title, Plot, Year, Country, Director, Released, Runtime } =
    data;
  let image = Poster === "N/A" ? DefaultImage : Poster;

  return !isLoading ? (
    <>
      <div className="single-movie">
        <img src={image} alt={Title} />
        <div className="single-info">
          <h2 className="textP">{Title}</h2>
          <p> {Plot}</p>
          <p className="textP">
            <strong>Country: </strong>
          </p>
          <p>{Country}</p>
          <p className="textP">
            <strong>Director: </strong>
          </p>
          <p>{Director}</p>
          <p className="textP">
            <strong>Released: </strong>
          </p>
          <p>{Released}</p>
          <p className="textP">
            <strong>Runtime: </strong>
          </p>
          <p>{Runtime}</p>
          <p className="textP">
            <strong>Year: </strong>
          </p>
          <p>{Year}</p>
        </div>
      </div>
    </>
  ) : (
    ""
  );
};

export default SingleMovie;
