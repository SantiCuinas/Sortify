import React, { useState, useEffect } from "react";
import "./App.css";
import SpotifyAPIWrapper from "./Utils/SpotifyAPIWrapper";
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "react-bootstrap/Dropdown";
import queryString from "query-string";

const pixelWidth = require("string-pixel-width");

function Main(props) {
  const [playlists, setPlaylists] = useState({
    options: [{ id: "", name: "" }],
  });

  useEffect(() => {
    getPlaylists(queryString.parse(props.location.hash).access_token).then((x) => {
      setPlaylists({ options: x.items });
    });
    console.log("Cosa de params", props)
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Sortify</h1>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Playlists
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {playlists.options.map((x) => {
              return (
                <Dropdown.Item onClick={() => SortifyIt(x.id, queryString.parse(props.location.hash).access_token)}>
                  {x.name}
                </Dropdown.Item>
              );
            })}
          </Dropdown.Menu>
        </Dropdown>
      </header>
    </div>
  );
}

const getPlaylists = async (tokenp) => {
  const spotify = new SpotifyAPIWrapper(tokenp);
  const userData = await spotify.getUserData();
  return await spotify.getPlaylists(userData.id);
};

const SortifyIt = async (playlistId, token) => {
  const spotify = new SpotifyAPIWrapper(token);
  const songs = await spotify.getSongs(playlistId);

  songs.items.sort((a, b) => {
    return pixelWidth(a.track.name) - pixelWidth(b.track.name);
  });

  const sortedSongs = songs.items.map((x) => {
    return x.track.uri;
  });
  spotify.savePlaylist(sortedSongs, playlistId);
};

export default Main;
