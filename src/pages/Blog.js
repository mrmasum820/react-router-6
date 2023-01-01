import React, { useEffect, useState } from 'react'
import { Link, useParams, useLocation } from 'react-router-dom'

export const Blog = () => {
    const { title } = useParams();
    const location = useLocation();
    // console.log(location);

    // const [bodyData, setBodyData] = useState("");
    // useEffect(() => {
    //     const blogData = blogsData.filter((blog) => blog.title === title);
    //     setBodyData(blogData[0].body)
    //     // console.log(blogData[0].body);
    // }, [])

    return (
        <div>
            <h3>{title}</h3>
            <p>{location.state.body.slice(0, 300)}</p>
            <p>{location.state.body.slice(301, 800)}</p>
            <Link to="/blogs">Go back</Link>
        </div>
    )
}
