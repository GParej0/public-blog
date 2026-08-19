import type { CommentCardProps } from "../types"
export default function CommentCard({ comment }: CommentCardProps) {
    return (
        <>
            <div className="commentCard">
                <h4>{comment.name}</h4>
                <p>{comment.body}</p>
            </div>
        </>
    )
}