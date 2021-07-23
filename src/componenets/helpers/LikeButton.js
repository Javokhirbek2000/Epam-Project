import React from "react";
import { useFavorites } from "../../hooks/useLocalStorage";

export default function LikeButton({ show, className }) {
  const [favorites, setFavorites] = useFavorites();

  function handleLike() {
    if (favorites?.find((x) => x.id === show.id)) {
      setFavorites(favorites?.filter((x) => x.id !== show.id));
    } else {
      setFavorites([...favorites, show]);
    }
  }

  return (
    <button className={`btn btn-light ${className}`} onClick={handleLike}>
      <i
        className={`bi text-danger bi-${
          favorites?.find((x) => x.id === show.id) ? "heart-fill" : "heart"
        }`}></i>
    </button>
  );
}
