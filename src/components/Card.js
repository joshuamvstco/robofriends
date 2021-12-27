import React from 'react';

const Card = (props) => {
    return (
        <div className='tc bg-light-green dib br3 pa2 ma2 grow bw2 shadow-2'>
            <img src={`https://robohash.org/${props.id}?200x200`} alt="Robot" />
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    );
}

export default Card;