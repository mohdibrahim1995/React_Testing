// App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
    const [items, setItems] = useState([]);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    // Fetch items from the dummy API
    useEffect(() => {
        axios.get('https://dummyjson.com/posts')
            .then(response => {
                console.log(response.data); // Log to check the data structure
                setItems(response.data.posts); // Assuming posts is an array
            })
            .catch(error => console.error('Error fetching items:', error));
    }, []);

    // Handle form submission to add a new item
    const handleSubmit = (event) => {
        event.preventDefault();
        const newItem = { title, body };

        axios.post('https://dummyjson.com/posts/add', newItem)
            .then(response => {
                console.log(response.data); // Log response data to check the new item structure
                setItems([...items, response.data]); // Update state with the new item
            })
            .catch(error => console.error('Error adding item:', error));

        setTitle('');
        setBody('');
    };

    return (
        <div>
            <h1>Items List</h1>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        <h2>{item.title}:</h2> {item.body}
                    </li>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                    required
                />
                <input
                    type="text"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    placeholder="Body"
                    required
                />
                <button type="submit">Add Item</button>
            </form>
        </div>
    );
};

export default App;
