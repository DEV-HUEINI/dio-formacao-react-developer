import React from 'react';
import './styles.css';

function ItemList({ title, description, url }) {
    return (
        <div className="item-list">
            <strong>
                <a href={url} target="_blank" rel="noopener noreferrer">
                    {title}
                </a>
            </strong>
            <p>{description}</p>
            <hr />
        </div>
    );
}

export default ItemList;