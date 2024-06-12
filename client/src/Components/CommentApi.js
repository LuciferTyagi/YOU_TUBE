const API_KEY = 'AIzaSyCERZDyfPzmGEjhw2XtAYoTxzgYBw4zfy4'; // Replace with your API key

export const fetchComments = async (videoId) => {
    const response = await fetch(`https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}&key=${API_KEY}`);
    const data = await response.json();
    if (data.items) {
        return data.items.map(item => ({
            author: item.snippet.topLevelComment.snippet.authorDisplayName,
            text: item.snippet.topLevelComment.snippet.textDisplay,
            timestamp: item.snippet.topLevelComment.snippet.publishedAt,
            avatar: item.snippet.topLevelComment.snippet.authorProfileImageUrl
        }));
    } else {
        return []; // or handle the error in another way
    }
};
