import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ChatsPage = () => {
    const [chats, setChats] = useState([]);

    const fetchChats = async () => {
        const res = await axios
            .get('/api/chats')
            .then((response) => {
                setChats(response.data);
                console.log(response);
            })
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        fetchChats();
    }, []);

    return (
        <div>
            {chats.map((chat) => (
                <h1 key={chat._id}>{chat.chatName}</h1>
            ))}
        </div>
    );
};

export default ChatsPage;
