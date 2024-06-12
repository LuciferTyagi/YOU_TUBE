import LOGO from "../Assets/LOGO.png";
import USER from "../Assets/USER.png";
export const LOGO_IMG = LOGO;
export const USER_IMG = USER;

const GOOGLE_API_KEY = "AIzaSyCERZDyfPzmGEjhw2XtAYoTxzgYBw4zfy4";
export const YOUTUBE_API =
  " https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=48&regionCode=IN&key=" +
  GOOGLE_API_KEY;


//  const query = 'your query';
// const corsProxy = 'https://cors-anywhere.herokuapp.com/';
// export const SEARCH_API = `${corsProxy}http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=`;