import CommentItem from "./CommentItem";

interface CommentFeedPorps {
  comments?: Record<string, any>[];
}

const CommentFeed: React.FC<CommentFeedPorps> = ({
  comments = []
}) => {
  return ( 
    <>
      {comments.map((comment) => (
        <CommentItem key={comment.id} data={comment} />

        
      ))}
    </>
   );
}
 
export default CommentFeed;