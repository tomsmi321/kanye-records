import React from 'react'

const Album = ({album}) => {
    const { album_label, album_name, album_release_date } = album.album;
    return (
        <div style={{border: '1px solid black', margin: '2rem'}}>  
            <h1 style={{fontSize: '1.3rem'}}>{album_name}</h1>
            <h3 style={{fontSize: '1rem'}}>Release: {album_release_date}</h3>
            {album_label && <h3 style={{fontSize: '1rem'}}>Label: {album_label}</h3>}
        </div>
    )
}

export default Album
