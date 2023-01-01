import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { blogsData } from '../data';

const truncateString = (str, num) => {
    if (str.length > num) {
        return str.slice(0, num) + '...'
    }
    else {
        return str
    }
}

export const Blogs = () => {
    const [blogs, setBlogs] = useState(blogsData);

    return (
        <div>
            <h2>Blogs page</h2>
            {
                blogs.map((blog) => {
                    const { id, title, body } = blog;
                    return (
                        <section key={id}>
                            <article>
                                <h3>{title}</h3>
                                <p>{truncateString(body, 200)}</p>
                                <Link to={title} state={{ id, title, body }}>Learn More</Link>
                            </article>
                        </section>
                    );
                })
            }
        </div>
    )
}
