import React from "react";
import "./App.css";
import { Row } from "./compornents/Row";
import { Banner } from "./compornents/Banner";
import { Nav } from "./compornents/Nav";
import { requests } from "./request";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="KENFLIX ORIGINALS"
        fetchUrl={requests.feachNetflixOriginals}
        isLargeRow
      />
      <Row title="人気" fetchUrl={requests.feactTopRated} />
      <Row title="アクション" fetchUrl={requests.feactActionMovies} />
      <Row title="コメディ" fetchUrl={requests.feactComedyMovies} />
      <Row title="ホラー" fetchUrl={requests.feactHorrorMovies} />
      <Row title="ロマンス" fetchUrl={requests.feactRomanceMovies} />
      <Row title="ドキュメンタリー" fetchUrl={requests.feactDocumentMovies} />
    </div>
  );
}

export default App;
