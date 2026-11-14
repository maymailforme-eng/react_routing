import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';



function Articles()
{
    let [posts, setPosts] = useState([]);
    useEffect
    (
        () => 
        {
            fetch(`https://jsonplaceholder.typicode.com/posts`)
                .then(response => response.json())
                .then(data => setPosts(data))
        },[]
    );

    return(
        <div className="content">
            <h1>Articles</h1>
            <ul>
                {
                    posts.map
                    (
                        post => (

                            <li><Link to={`/articles/${post.id}`}>{post.title}</Link></li>
                        )
                        
                    )

                }
            </ul>
            
        </div>
    )
}
export default Articles;