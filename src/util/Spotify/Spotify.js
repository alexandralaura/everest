
let accessToken;
const clientID = "90a08773da824a3cb8fd82d489753673";
const redirectUrl ="http://localhost:3000";
const Spotify = {
  getaccessToken() {
    if (accessToken) return accessToken;
    const tokenInUrl = window.location.href.match(/access_token=([^&]*)/);
    const expiryTime = window.location.href.match(/expires_in=([^&]*)/);
    if (tokenInUrl && expiryTime) {
        accessToken = tokenInUrl[1];
        const expiresIn = Number(expiryTime[1]);
        //setting the function that will refresh the access token when it expires
        window.setTimeout(() => (accessToken =""), expiresIn*1000)
        //clearing the url after the access token has expired
        window.history.pushState("Access token",null, "/");
        return accessToken;
    }
    const redirect = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUrl}`
    window.location = redirect;
  },
  search(term) {
       return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
        method: 'GET',
        headers: {Authorization: `Bearer ${accessToken}`},
       }).then(response => response.json())
       .then(jsonResponse => {
        if(!jsonResponse) {
          console.log('Error');
        }
        console.log(accessToken);
        console.log(jsonResponse)
        return jsonResponse.tracks.items.map(t => ({
          id: t.id,
          name: t.name,
          artist: t.artist[0].name,
          album: t.album.name,
          uri: t.uri
        }))
       })
  }
};
export {Spotify}