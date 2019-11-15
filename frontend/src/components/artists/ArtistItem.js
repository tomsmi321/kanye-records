import React from 'react'
import { Link } from 'react-router-dom';

const ArtistItem = (props) => {
    const { artist_name, artist_country, artist_rating, artist_id } = props.artist;
   
    return (
        <Link style={{width: '50%', margin: '5rem'}} className="text-center" to={`/artist/${artist_id}`}>
            <div style={{border: '1px solid #eaeaea'}}>
                <h1>{artist_name}</h1>
                {artist_country && <h5 style={{color: 'black', textDecoration: 'bold'}}>Country: {artist_country}</h5>}
                {artist_rating && <h5>Rating: {artist_rating}</h5>}
            </div>
        </Link>
    )
}

export default ArtistItem;



