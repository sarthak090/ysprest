import Button from '../ui/button';
import Input from '../ui/forms/input';
import TextArea from '../ui/forms/text-area';

export default function Comment() {
  return (
    <div>
      <div className="mb-6 text-2xl font-semibold">Leave A Comment*</div>
      <form action="">
        <Input
          name="Title"
          placeholder="Title of your comment *"
          className="bg-white"
        />
        <div className="my-5">
          <TextArea name="message" placeholder="Your Comment *" />
        </div>
        <Button>Submit</Button>
      </form>
    </div>
  );
}
