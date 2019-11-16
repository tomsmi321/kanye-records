// dependencies
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const axios = require('axios');
require('dotenv').config();

// create an instance of an express server
const app = express();

// middleware
app.use(cors());
app.use(morgan('tiny'));

// body parser
app.use(express.json());


app.get('/test', (req, res) => {
    try {
        res.send('working')
    } catch(error) {
        res.status(500).send(error)
    }      
})

// returns an array of artists based on a string search query
app.post('/', async (req, res) => {
    const API_KEY = 'c67ba07ea80a0bc3a6944427f2285236';
    try {
        let { searchTerm } = req.body;
        // console.log(searchTerm);
        const result = await axios.get(`https://api.musixmatch.com/ws/1.1/artist.search?format=jsonp&callback=callback&q_artist=${searchTerm}&apikey=${API_KEY}`);
        const data = JSON.parse(result.data.split('callback(').join('').split(')')[0]);

        const artistList = data.message.body.artist_list;
        
        console.log(artistList);

        res.send(artistList);
    } catch(error) {
        res.status(500).send(error);
    }
})


// returns an array of an artists albums based on the artist id passed into route params
app.get('/:id', async (req, res) => {
    const API_KEY = 'c67ba07ea80a0bc3a6944427f2285236';
    try {
        const id = req.params.id;

        const albumsResult = await axios.get(`https://api.musixmatch.com/ws/1.1/artist.albums.get?format=jsonp&callback=callback&artist_id=${id}&apikey=${API_KEY}`);
        const albumData = JSON.parse(albumsResult.data.split('callback(').join('').split(')')[0]);
        const albumList = albumData.message.body.album_list;
        // console.log(albumList);

        const artistResult = await axios.get(`https://api.musixmatch.com/ws/1.1/artist.get?format=jsonp&callback=callback&artist_id=${id}&apikey=${API_KEY}`);
        const artistData = JSON.parse(artistResult.data.split('callback(').join('').split(')')[0]);
        const artistInfo = artistData.message.body;
        
        const artist = {
            info: artistInfo.artist,
            albums: albumList
        }

        res.send(artist);    //this sends the albums for that artists id
    } catch(error) {
        res.status(500).send(500);
    }
})


// define a port
const PORT = process.env.PORT || 5000;

// make the app listen on the specified port
app.listen(PORT, () => console.log(`listening on port: ${PORT}`));

