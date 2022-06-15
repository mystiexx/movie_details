import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./app/Home/Home";
import Movies from "./app/Movies/Movies";
import Shows from "./app/Shows/Shows";
import API from "./api";
import Loader from "./Components/Loader/Loader";

const App = () => {
  const [jumbo, setJumbo] = useState([]);
  const [latest, setLatest] = useState([]);
  const [series, setSeries] = useState([]);
  const [popular, setPopular] = useState([]);
  const [trending, setTrending] = useState([]);
  const [loading, setLoading] = useState(true);

  const getMovies = async () => {
    setLoading(true);
    try {
      const response = await API.get(
        `/discover/movie?api_key=d0ff6f9cb6c33dcc6bc0c0a6381f2884`
      );
      const res = await API.get(
        `/tv/popular?api_key=d0ff6f9cb6c33dcc6bc0c0a6381f2884`
      );
      const pop = await API.get(
        `/movie/popular?api_key=d0ff6f9cb6c33dcc6bc0c0a6381f2884`
      );
      const trend = await API.get(
        `/trending/all/day?api_key=d0ff6f9cb6c33dcc6bc0c0a6381f2884`
      );
      setPopular(pop.data.results);
      setTrending(trend.data.results);
      setSeries(res.data.results);
      setJumbo(response.data.results);

      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const getLatest = async () => {
    setLoading(true);
    try {
      const response = await API.get(
        `/movie/top_rated?api_key=d0ff6f9cb6c33dcc6bc0c0a6381f2884`
      );
      setLatest(response.data.results);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMovies();
    getLatest();
  }, []);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Home
                  jumbo={jumbo}
                  latest={latest}
                  series={series}
                  popular={popular}
                  trending={trending}
                />
              }
            />
            <Route exact path="/movies" element={<Movies />} />
            <Route exact path="/tv_shows" element={<Shows />} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
};

export default App;
