import type React from "react";
import { addComment } from "../services/api"
import { useParams } from "react-router-dom"

export default function CommentForm(
    { setNewComment, refreshPost }: {
        setNewComment: React.Dispatch<React.SetStateAction<boolean>>;
        refreshPost: () => void;
    }
) {
    const { id } = useParams();

    async function handleSubmit(e: React.SubmitEvent) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget as HTMLFormElement);
        const name = formData.get("commentName") as string;
        const body = formData.get("commentBody") as string;

        try {
            await addComment(Number(id), name, body)
            refreshPost()
            setNewComment(false)
        } catch (error) {
            throw (error)
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="commentName">Name:</label>
                <input type="text" name="commentName" id="commentName" />
                <label htmlFor="commentBody">Add comment:</label>
                <input type="text" name="commentBody" id="commentBody" />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}
