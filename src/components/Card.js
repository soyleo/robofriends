// import React from 'react';

const Card = ({ name, email, id }) => {
    return (
        <div className='bg-light-pink dib br3 ma2 grow shadow-hover dw2 tc w6'>
            <img alt='Robots' src={`https://robohash.org/${id}?size=200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;