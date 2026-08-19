import { usePost } from "../services/api.js";
import { useParams } from "react-router-dom";
import CommentCard from "../components/CommentsCard.js";
import CommentForm from "../components/CommentForm.js";

import { useState } from "react";

export default function PostDetails() {

    const { id } = useParams();
    const { post, loading, error, fetchPost } = usePost(id);
    const [newComment, setNewComment] = useState(false);
    if (loading) {
        return (
            <p>Loading Post</p>
        )
    }

    if (error) {
        return (
            <p>Something went wrong</p>
        )
    }
    function addingComment() {
        if (newComment === false) {
            setNewComment(true)
        } else {
            setNewComment(false)
        }
    }
    return (
        <>
            <div className="post-info">
                <h2>{post?.name}</h2>
                <h3>{post?.user.user}</h3>
                <p>{post?.body}</p>
            </div>
            <div className="comment-list">
                <h3>Comments:</h3>
                {post?.comments?.map(comment => {
                    return <CommentCard key={comment.id} comment={comment} />
                })}
            </div>

            {newComment === false ? (<button onClick={addingComment}>Add new comment</button>) : (<CommentForm setNewComment={setNewComment} refreshPost={fetchPost} />)}
        </>
    )
}