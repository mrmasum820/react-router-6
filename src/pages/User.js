import React, { useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

// router parameter -> useParams hook
// query parameter -> useSearchParams

export const User = () => {
    const { userId } = useParams();
    const [searchParams, setSearchParams] = useSearchParams();

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchParams({ name: name, pass: password });
    }

    return (
        <div>
            {/* <h2>Id found: {userId}</h2> */}

            {/* <h2>User Id: {searchParams.get('id')}</h2>
            <h2>User Name: {searchParams.get('name')}</h2> */}
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)} /><br />
                <input type="password" placeholder='enter password' value={password} onChange={(e) => setPassword(e.target.value)} /><br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
