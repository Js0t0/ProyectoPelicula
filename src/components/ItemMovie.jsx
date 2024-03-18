import DefaultImage from "/NoImage.png";
import { Link } from "react-router-dom";

const ItemMovie = ({ id, title, type, year, poster }) => {
  let image = poster === "N/A" ? DefaultImage : poster;

  return (
    <Link
      to={`/movies/${id}`}
      style={{ color: "inherit", textDecoration: "inherit" }}
    >
      <div>
        <div className=" flex max-w-sm w-full  shadow-md rounded-lg overflow-hidden ">
          <div
            className="item-movie"
            style={{ backgroundImage: `url(${image})` }}
          >
            <h6 className="type">{type.toUpperCase()}</h6>
            <h4 className="info mx-auto ">{title}</h4>
          </div>
          <div></div>
        </div>
      </div>
    </Link>
  );
};

export default ItemMovie;
