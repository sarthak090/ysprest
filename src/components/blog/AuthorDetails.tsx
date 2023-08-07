import Image from 'next/image';

export default function AuthorDetails({ post }: any) {
  return (
    <div>
      <div className="my-4 flex   gap-6 rounded-md bg-[#EFEFEF] p-4">
        <div className="flex flex-shrink-0 items-center">
          <Image
            src={post.x_gravatar}
            alt={''}
            className="rounded-full"
            width={100}
            height={100}
          />
        </div>
        <div className="">
          <p className=" text-xl font-bold"> {post.x_author}</p>
          <p className="my-2 leading-6">{post.author_description}</p>
        </div>
      </div>
    </div>
  );
}
