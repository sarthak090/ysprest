export default function Comments(props: any) {
  const { comments } = props;

  return (
    <div>
      <div className="grid gap-2">
        {comments?.map((comment: any) => (
          <>
            <div className="my-4 rounded-lg border p-4">
              <div className="text-md mb-4 font-bold ">
                <a
                  target="_blank"
                  rel="nofollow"
                  href={comment.comment_author_url}
                >
                  {comment.comment_author}
                </a>
              </div>
              <div className="pl-4">{comment.comment_content}</div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
