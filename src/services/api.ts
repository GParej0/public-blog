import { useEffect, useState } from "react";
import type { Post } from "../types";

export default function usePosts() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    useEffect(() => {
        fetch("https://blog-api-4qqr.onrender.com/posts").then((response) => {
            if (!response.ok) {
                throw new Error("Error en la petición");
            }
            return response.json();
        }).then(data => {
            setPosts(data.posts);
            setLoading(false)
        }).catch(() => {
            setError(true);
            setLoading(false)
        })
    }, [])
    return { posts, loading, error }
}

export function usePost(id: string | undefined) {
    const [post, setPost] = useState<Post>();
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const fetchPost = () => {
        if (!id) return;
        fetch(`https://blog-api-4qqr.onrender.com/posts/${id}`).then((response) => {
            if (!response.ok) {
                throw new Error("Error en la petición");
            }
            return response.json();
        }).then(data => {
            setPost(data.post);
            setLoading(false)
        }).catch(() => {
            setError(true);
            setLoading(false)
        })
    }
    useEffect(() => {
        fetchPost();
    }, [id]);

    return { post, loading, error, fetchPost }
}
//SIN USO APARENTE
/* export function useComments(id: string | undefined) {
    const [comments, setComments] = useState<Comment[]>([]);

    useEffect(() => {
        if (!id) {
            return
        }
        fetch(`https://blog-api-4qqr.onrender.com/posts/${id}/comments`).then((response) => {
            if (!response.ok) {
                throw new Error("Error en la petición");
            }
            return response.json()
        }).then(data => { setComments(data.allComments) }).catch((error) => error)
    }, [id])
    return { comments }
} */

export async function addComment(postId: number, name: string, body: string) {
    const response = await fetch(`https://blog-api-4qqr.onrender.com/posts/${postId}/comments`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            body: body
        })
    })
    if (!response.ok) {
        throw new Error("No se pudo publicar el comentario");
    }
    return await response.json();
}