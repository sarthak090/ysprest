import { toast } from 'react-toastify';
import Button from '../ui/button';
import Input from '../ui/forms/input';
import TextArea from '../ui/forms/text-area';
import { useState } from 'react';
export default function Comment({ postId }: any) {
  const [title, setTitle] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function submitComment(e: any) {
    e.preventDefault();
    if (title.length == 0 || email.length == 0 || message.length === 0) {
      toast.error('Fill all the required fields');
      return;
    }
    postComment({ title, message, email });
  }
  async function postComment({ title, message, email }: any) {
    const comment = {
      comment_author: title,
      comment_author_email: email,
      comment_author_url: '',
      comment_content: message,
      comment_post_ID: postId,
    };

    fetch('/api/comment', {
      method: 'POST',
      body: JSON.stringify(comment),
      headers: {
        'application-type': 'JSON',
      },
    })
      .then((r) => r.json())
      .then((r) => {
        toast.success('Comment Submitted Succesfully');
      })
      .catch((r) => {
        toast.error('Please Try Again ');
      });
  }
  return (
    <div>
      <div className="mb-6 text-2xl font-semibold">Leave A Comment*</div>
      <form onSubmit={submitComment}>
        <Input
          name="Title"
          placeholder="Title of your comment *"
          className="bg-white"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <Input
          name="Email"
          placeholder="Your Email *"
          className="my-4 bg-white"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <div className="my-5">
          <TextArea
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            name="message"
            placeholder="Your Comment *"
          />
        </div>
        <Button>Submit</Button>
      </form>
    </div>
  );
}
