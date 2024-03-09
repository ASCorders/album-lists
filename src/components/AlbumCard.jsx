import { useDispatch, useSelector } from "react-redux";
import { removeFavorites, setFavorite } from "../store/store-slice/albumSlice";
import { notifyError, notifySuccess } from "../utils/toast";

function AlbumCard({ album }) {
  const { id, title, thumbnailUrl } = album;
  // get all  favorite item form store
  const isFavorite = useSelector((store) => store.albumSlice.favorites.some((item) => item.id === id));

  const dispatch = useDispatch();

  // item add to favorite and update to Favorite store
  const setFavoriteHandle = () => {
    dispatch(setFavorite(album));
    notifySuccess("Added to favorite.");
  };

  // item remove to favorite and update to Favorite store
  const removeFavoriteHandle = () => {
    dispatch(removeFavorites(id));
    notifyError("Removed from favorite.");
  };

  return (
    <div className="card w-100 mb-2">
      <div className="card-body d-flex gap-3 ">
        <div className="img-box">
          <img src={thumbnailUrl} alt={title} />
        </div>
        <div className="content">
          <h5 className="mb-1 text-capitalize">{title}</h5>
          <p>Id : {id}</p>
          {isFavorite ? (
            <button
              className="btn btn-danger btn-sm px-4 "
              onClick={removeFavoriteHandle}
            >
              Remove favorite
            </button>
          ) : (
            <button
              className="btn btn-warning btn-sm px-4"
              onClick={setFavoriteHandle}
            >
              Add favorite
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default AlbumCard;
