import { useCallback, useEffect, useState } from "react";
import AlbumCard from "../components/AlbumCard";
import { Link } from "react-router-dom";
import ApiLoader from "../components/ApiLoader";
import { useDispatch, useSelector } from "react-redux";
import { setActivePage, setAlbumsStore } from "../store/store-slice/albumSlice";
function Lists() {
  const [loading, setLoading] = useState(false);

  const albums = useSelector((store) => store.albumSlice.albums);
  const activePage = useSelector((store) => store.albumSlice.activePage);
  const endResult = useSelector((store) => store.albumSlice.endResult);
  const dispatch = useDispatch();

  // fetch api data
  const fetchAlbumHandle = useCallback(
    async (currentPage) => {
      try {
        setLoading(true);
        const apiCall = await fetch(
          `https://jsonplaceholder.typicode.com/albums/1/photos?_page=${currentPage}&_limit=10`
        );
        const res = await apiCall.json();

        dispatch(setActivePage(currentPage + 1));
        setLoading(false);
        dispatch(setAlbumsStore(res));
      } catch (error) {
        setLoading(false);
        console.log("error from >>>>>>.", error.message);
      }
    },
    [dispatch]
  );
  // fetch api data on scroll
  const handleScroll = useCallback(() => {
    if (
      Math.round(window.innerHeight + document.documentElement.scrollTop) ===
        document.documentElement.offsetHeight &&
      !loading
    ) {
      fetchAlbumHandle(activePage);
    }
  }, [fetchAlbumHandle, loading, activePage]);

  const hasData = albums.length > 0;

  useEffect(() => {
    if (!hasData) {
      fetchAlbumHandle(1);
    }
  }, [hasData, fetchAlbumHandle]);

  // add scroll event add remove scroll event
  useEffect(() => {
    if (!endResult) {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [handleScroll, endResult]);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-5 m-auto">
            <div className="d-flex align-items-center justify-content-between">
              <h1 className="heading">Album lists</h1>
              <Link to="/">Go back to Dashboard</Link>
            </div>

            {albums.length > 0 &&
              albums.map((album, idx) => <AlbumCard key={idx} album={album} />)}

            {loading && <ApiLoader />}

            {endResult && <p className="text-center">End results</p>}
          </div>
        </div>
      </div>
    </>
  );
}

export default Lists;
