import React, { useEffect, useState } from 'react';
import client from '../../api';


export default function PostList() {
    const [posts, setposts] = useState([]);

    async function fetchposts() {
        try {
            let response = await client.get('posts');
            console.log(response);
            setposts([...response.data]);
        } catch (err) {
            console.log('Something went wrong...', err)
        }
    }
    useEffect(() => {
        fetchposts()
    }, []);

    return <>
        <h3 className='text-center'>Fetch Data from API using Axios Instance </h3>
        <table className='table table-bordered table-striped'>
            <tbody>
                {posts.map((post) => {
                    return <tr key={post.id}>
                        <td>{post.id}</td>
                        <td>{post.title}</td>
                        <td>{post.body}</td>
                    </tr>
                })}
            </tbody>
        </table>
    </>
}
