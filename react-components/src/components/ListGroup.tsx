// List Group using Manage State
import { useState } from 'react';

function ListGroup() {
    let items = [
        'C++',
        'C',
        'Assembly Language',
        'Java',
        'CSS',
        'HTML',
        'Python',
        'JavaScript',
        'React',
        'SQL'
    ];
    // let activeItem = 0;
    // Hook
    const [activeItem, setActiveItem] = useState(-1);

    return (
        <>
            <h4>Choose a Language</h4>
            {items.length === 0 && <p>No item found</p>}
            <ul className="list-group">
                {items.map((item, index) => (
                <li
                    className = { activeItem === index ? 'list-group-item active' : 'list-group-item'}
                    key={item}
                    onClick={() => { setActiveItem(index); }}
                >
                    {item}
                </li>
                ))}
            </ul>
        </>         
    );
}

export default ListGroup;