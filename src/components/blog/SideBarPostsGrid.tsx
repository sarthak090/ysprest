import { BlogPost } from '@/types';
import Image from 'next/image';

interface Props {
  posts: BlogPost[];
  heading: string;
}
export default function SideBarPostsGrid({ posts, heading }: Props) {
  return (
    <div className="  bg-[#F1F1F1] p-5">
      <div className="mb-4 font-bold text-[#82ADD2] lg:text-2xl">{heading}</div>
      <hr />
      <div className="grid grid-cols-1 gap-4 py-4">
        {posts.slice(0, 5).map((post) => (
          <div className="flex items-center gap-6">
            <div className="flex-shrink-0">
              {post.featuredImg.thumbnail && (
                <Image
                  src={post.featuredImg.thumbnail}
                  width={80}
                  height={80}
                  alt={post.title.rendered}
                  objectFit="cover"
                />
              )}
            </div>
            <div>
              <div>{post.title.rendered}</div>
              <div className="font-semibold text-red-800">
                {post.author.name}
                <span className="mx-4">|</span>
                {post.diff}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
