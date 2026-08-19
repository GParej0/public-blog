import usePosts from "../services/api";
import { Link } from "react-router-dom";

export default function PostCard() {
    const { posts } = usePosts();
    return (
        <>
            {posts.map(post => {
                return (
                    <div className="post-card" key={post.id}>
                        <p>{post.user.user}</p>
                        <h3>{post.name}</h3>
                        <p>{post.body}</p>
                        <p>{new Date(post.createdAt).toLocaleDateString()}</p>
                        {post.updatedAt && <p>Updated on: {new Date(post.updatedAt).toLocaleDateString()}</p>}
                        <Link to={`/posts/${post.id}`}>Read More</Link>
                    </div>
                )
            })}
        </>
    )
}