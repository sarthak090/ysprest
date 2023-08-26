import Button from '@/components/ui/button';
import Input from '@/components/ui/forms/input';
import TextArea from '@/components/ui/forms/text-area';
import React from 'react';

function CallbackForm() {
  return (
    <div className="my-4 rounded-md border-r-[12px]   border-blue-700 bg-[#F6F6F6] p-8">
      <div className="grid gap-4 lg:grid-cols-3">
        <div className="grid gap-5 ">
          <div>
            <Input name="name" className="!bg-white" placeholder="Name" />
          </div>
          <div>
            <Input name="phone" placeholder="Phone No." />
          </div>
          <div>
            <Input name="email" type="email" placeholder="Email" />
          </div>
          <Button className="hidden bg-red-500 lg:block">Submit</Button>
        </div>
        <div className="border-t p-2">
          <TextArea rows={9} name="comment" placeholder="Comments"></TextArea>
          <Button className="my-2 block w-full bg-red-500 lg:hidden">
            Submit
          </Button>
        </div>
        <div className="flex items-center justify-center border-l p-4">
          <p className="text-2xl font-bold text-red-500">
            Get A Call Back Related to Query
          </p>
        </div>
      </div>
    </div>
  );
}

export default CallbackForm;
