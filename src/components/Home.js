import React from "react";
import Row from "./Row";
import requests from "../requests";
import Banner from "./Banner";

function Home() {
  return (
    <div>
      <Banner />
      <Row isLargeRow title="Popular" fetchUrl={requests.fetchPopular} />
      <Row
        isLargeRow
        title="Trending Now"
        fetchUrl={requests.fetchNowPlaying}
      />
      <Row
        isLargeRow
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row isLargeRow title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row isLargeRow title="Upcoming" fetchUrl={requests.fetchUpcoming} />
      <Row isLargeRow title="Action" fetchUrl={requests.fetchActionMovies} />
      <Row isLargeRow title="Comedy" fetchUrl={requests.fetchComedyMovies} />
      <Row isLargeRow title="Horror" fetchUrl={requests.fetchHorrorMovies} />
      <Row isLargeRow title="Romance" fetchUrl={requests.fetchRomanceMovies} />
      <Row
        isLargeRow
        title="Documentries"
        fetchUrl={requests.fetchDocumentries}
      />
    </div>
  );
}

export default Home;
