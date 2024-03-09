import { useSelector } from "react-redux";
import AlbumCard from "./AlbumCard";

function Favorites() {
  // get all  favorite item form store
  const favorites = useSelector((store) => store.albumSlice.favorites);

  return (
    <>
      <h4 className="my-3">All Favorites Album List</h4>
      <div className="container-fluid">
        <div className="row">
          {favorites.length > 0 ? (
            favorites.map((item, idx) => (
              <div className="col-md-4" key={idx}>
                <AlbumCard album={item} />
              </div>
            ))
          ) : (
            <div className="col-md-12 col-12">
              <p className="">No favorites added yet</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Favorites;
