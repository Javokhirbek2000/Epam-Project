import React from 'react'

export default function Card(props) {
    return (
        <div>
            <p>{props.movie.name}</p>
            <img src={props.movie.image.original} />
            <div dangerouslySetInnerHTML={{ __html: props.movie.summary }} />
        </div>
    )
}

