
let accessToken;
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
    }

 }
};
export {Spotify}