import React, { Component } from 'react'
import Spinner from '../layouts/Spinner';
import Album from '../albums/Album';

class Artist extends Component {
    componentDidMount() {
        const { getArtist, match: { params } } = this.props;
        getArtist(params.id);
    }
    
    render() {
        const { loadingArtist, artist } = this.props;
        
        if(loadingArtist){
            return <Spinner />
        } else {
            const { artist_name, artist_country, artist_twitter_url, artist_rating } = artist.info;
            console.log('info', artist.info);
            console.log('albums', artist.albums);
            return (
                <div className="text-center">
                    <h1>{artist_name} ({artist_country})</h1>
                    <h4>Rating: {artist_rating}</h4>
                    <a target="_blank" href={artist_twitter_url}><i class="fab fa-twitter"></i></a>
                    {artist.albums.map((album, index) => {
                        return <Album key={index} album={album} />
                    })}
                </div>
            )
        }

    }
}

export default Artist
