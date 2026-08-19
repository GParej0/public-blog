import usePosts from "../services/api";
import PostCard from "../components/PostCard";

export default function HomePage() {
    const { loading, error } = usePosts();


    if (loading) {
        return (
            <p>Loading posts</p>
        )
    }

    if (error) {
        return (
            <p>Error</p>
        )
    }
    return (
        <>
            <div className="post-Container">
                <PostCard />
            </div>
        </>
    )
}