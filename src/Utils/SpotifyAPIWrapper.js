const axios = require("axios");
const normalizeUrl = require("normalize-url");

export default class SpotifyApiWrapper {
  constructor(token) {
    this.token = token;
  }

  getUserData() {
    return axios
      .get("https://api.spotify.com/v1/me", {
        headers: { Authorization: `Bearer ${this.token}` },
      })
      .then((response) => {
        return response.data;
      });
  }

  getPlaylists(userId) {
    return axios
      .get(
        normalizeUrl(`https://api.spotify.com/v1/users/${userId}/playlists`),
        {
          headers: { Authorization: `Bearer ${this.token}` },
        }
      )
      .then((response) => {
        return response.data;
      });
  }

  getSongs(playlistId) {
    return axios
      .get(
        normalizeUrl(
          `https://api.spotify.com/v1/playlists/${playlistId}/tracks`
        ),
        {
          headers: { Authorization: `Bearer ${this.token}` },
        }
      )
      .then((response) => {
        return response.data;
      });
  }

  savePlaylist(songs, playlistId) {
    return axios
      .put(
        normalizeUrl(
          `https://api.spotify.com/v1/playlists/${playlistId}/tracks`
        ),
        { uris: songs },
        {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        }
      )
      .then((response) => {
        return response.data;
      })
      .catch((e) => console.log(e.response));
  }
}