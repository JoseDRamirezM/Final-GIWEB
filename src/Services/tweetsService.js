import axios from 'axios';
const baseUrl = 'https://saldatweets.herokuapp.com/publications';

const get_tweets = () => {
    const request = axios.get(baseUrl);
    return request.then((response) => response.data);
};

const publicar_tweet = async (nuevo_tweet) => {
    const response = await axios.post(baseUrl, nuevo_tweet);
    return response.data;
};

export default { get_tweets, publicar_tweet };
