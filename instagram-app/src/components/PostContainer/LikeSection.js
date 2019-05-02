import React from 'react';

const LikeSection = props => {
    return [
        <div
            className = "like-section"
            key = "likes-icons-container"
            onClick = {props.incrementLike}
        />
    ]
}