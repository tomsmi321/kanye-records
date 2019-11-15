import React from 'react'
import Spinner from '../layouts/Spinner';
import ArtistItem from './ArtistItem';

const Artists = ({ artists, loading }) => {
    
    if(loading){
        return <Spinner />
    } else {
        return (
            <div className="text-center">
                {artists.map((artist, index) => {
                    return <ArtistItem artist={artist.artist} key={index} />
                })}
            </div>
        )
    }
}

export default Artists
