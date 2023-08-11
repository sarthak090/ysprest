import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import React, { useEffect, useState } from 'react';
import HomeLayout from '@/components/layouts/_home';
import Image from 'next/image';
import Link from '@/components/ui/link';
import PostMeta from '@/components/post/PostMeta';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { extractMetaTags, extractScriptTags } from 'utils/extractMetaTags';
import SeoByRankMath from '@/components/products/SEO';
import { formatDate } from 'utils/formatDiff';
import HearFromUsForm from '@/components/blog/hear-from-us-form';
import AuthorDetails from '@/components/blog/AuthorDetails';
import Comment from '@/components/blog/Comment';
import TabsSidebar from '@/components/blog/TabsSidebar';
import EmbeddedPDF from '@/components/Embed/EmbedPdf';
import { useModalAction } from '@/components/ui/modal/modal.context';
import { useRouter } from 'next/router';

function Singleblog() {
  const [query, setQuery] = useState('');
  const [posts, setPosts] = useState([]);
  const router = useRouter();
  useEffect(() => {
    if (router.query) {
      const { s } = router.query;
      if (s && s.length > 2) {
        setQuery(s);
        fetchPosts(s);
      }
    }
  }, [router]);
  async function fetchPosts(searchTitle: any) {
    const url =
      process.env.NEXT_PUBLIC_WP_API + `/wpr/v1/search?title=${searchTitle}`;
    try {
      const posts = await fetch(url).then((r) => r.json());
      setPosts(posts);
    } catch (err) {
      setPosts([]);
    }
  }
  return (
    <>
      {' '}
      <div className="container mx-auto  bg-white px-4  lg:px-32">
        <div className="my-12 grid gap-8 md:grid-cols-3">
          {posts.length == 0 && query.length < 2 && <div>No Posts Found</div>}

          {posts.length > 0 &&
            posts.map((post: any) => (
              <Link href={`/blog/${post.slug}`}>
                <div key={post.id}>
                  <div>
                    {post.featuredImg.medium && (
                      <Image
                        src={post.featuredImg.medium}
                        width={500}
                        className="rounded-md"
                        height={300}
                        alt={post.title}
                      />
                    )}
                  </div>
                  <div className="text-[14px] font-bold text-[#333333] lg:text-[20px]">
                    <p dangerouslySetInnerHTML={{ __html: post.title }} />
                  </div>
                  {/* <div className="text-[12px]  font-semibold text-[#077A43] lg:text-[14px]">
                    <span className=" ">{post.author.name}</span> |{' '}
                    <span className="capitalize">{post.diff} </span>
                  </div> */}

                  {/* <Link
                    className="my-4 text-[12px] font-bold text-[#166ab4] lg:text-[18px]"
                    href={`/blog/${post.slug}`}
                  >
                    Read Article →{' '}
                  </Link> */}
                </div>
              </Link>
            ))}
        </div>
      </div>
    </>
  );
}

Singleblog.getLayout = function getLayout(page: any) {
  return <HomeLayout layout={page.props.layout}>{page}</HomeLayout>;
};
export default Singleblog;
