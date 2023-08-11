import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import React from 'react';
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

function Singleblog({ post, seoData }: any) {
  if (post.excerpt.rendered.toString().includes('Download Magazine')) {
    const bookLink = extractPdfLink(post.content.rendered);
    const { openModal } = useModalAction();

    return (
      <>
        <SeoByRankMath {...seoData} />

        <div className="container mx-auto  bg-white  px-4 lg:py-8  lg:px-28">
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-12">
              <h1 className="my-6 text-center text-3xl font-bold text-blue-500 ">
                {post.title.rendered}
              </h1>

              <div className="flex justify-center">
                {bookLink && <EmbeddedPDF url={bookLink} />}
              </div>
              <div className="my-8 flex justify-center">
                {bookLink && (
                  <button
                    onClick={() => {
                      openModal('DOWNLOAD_MAGZINE_MODAL', bookLink);
                    }}
                    className="rounded-md bg-blue-800 px-6 py-3 text-white outline-none"
                  >
                    Download Magazine
                  </button>
                )}
              </div>
            </div>

            <div className="col-span-12 grid grid-cols-2 gap-4 lg:grid-cols-4 ">
              {post.all_magzines && post.all_magzines.length > 0
                ? post.all_magzines.map((magazine: any) => (
                    <Link href={`/blog/${magazine.slug}`}>
                      <div className="hover:cursor-pointer">
                        <div className="flex items-center justify-center">
                          <Image
                            height={400}
                            className="rounded-md"
                            width={340}
                            src={magazine.featuredImg?.large}
                          />
                        </div>
                      </div>
                    </Link>
                  ))
                : null}
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <SeoByRankMath {...seoData} />
      <div className="container mx-auto  bg-white   px-2 lg:py-8  lg:px-28">
        <div className="grid gap-4 lg:grid-cols-12">
          <div className="col-span-7">
            <Image
              src={post.x_featured_media_original}
              alt={post.title.rendered}
              className="mb-4 object-contain"
              width={1020}
              height={720}
            />

            <h1
              className="text-3xl font-bold "
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />
            <PostMeta {...post} />

            <div
              className="post-content"
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            />
            <p className="text-2xl font-semibold">About The Author</p>

            <AuthorDetails post={post} />
            <Comment postId={post.id} />
          </div>
          <div className="w-full lg:col-span-4">
            <HearFromUsForm />
            <TabsSidebar
              details={{
                latest: post.latest_posts,
                popular: post.latest_posts,
                trending: post.latest_posts,
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({
  params,
  locale,
}: GetStaticPropsContext) => {
  const { slug } = params!;
  const url = process.env.NEXT_PUBLIC_WP_API + `/wp/v2/posts/?slug=${slug}`;

  try {
    // const seo = await fetch(rankMathHeadUrl).then((r) => r.json());

    const post = await fetch(url).then((r) => r.json());

    if (post.status) {
      return {
        props: {
          post: null,
          ...(await serverSideTranslations(locale!, ['common'])),
        },
        notFound: true,
      };
    }
    const { NEXT_PUBLIC_CMS } = process.env;

    const seoURL = `${NEXT_PUBLIC_CMS}/wp-json/rankmath/v1/getHead?url=${NEXT_PUBLIC_CMS}/blog/${slug}`;
    const seoData = await fetch(seoURL).then((r) => r.json());

    let postTosend = {
      post: { ...post[0], diff: formatDate(post[0].diff) },

      //   seo,

      //   nextSeoData: genNextSeo({ seo, tags: post.tags, slug: post.slug }),
    };
    if (
      postTosend.post.excerpt.rendered.includes('Download Magazine') === false
    ) {
      try {
        const authorUrl = `${NEXT_PUBLIC_CMS}/wp-json/wpr/v1/posts/${slug}`;
        const latestPostUrl = `${NEXT_PUBLIC_CMS}/wp-json/wpr/v1/infinite-posts`;
        const authorData = await fetch(authorUrl).then((r) => r.json());
        const latestPostData = await fetch(latestPostUrl).then((r) => r.json());

        postTosend.post.author_description = authorData.author.description;
        postTosend.post.latest_posts = latestPostData;
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        const url =
          process.env.NEXT_PUBLIC_WP_API +
          '/wpr/v1/category/issues?start=1&limit=200';

        const data = await fetch(url).then((r) => r.json());
        postTosend.post.all_magzines = data;
      } catch (err) {}
    }

    return {
      props: {
        post: postTosend.post,
        seoData: {
          meta_tags: extractMetaTags(seoData.head),
          jsonLtdScheam: extractScriptTags(seoData.head),
        },
        ...(await serverSideTranslations(locale!, ['common'])),
      },
    };
  } catch (err) {
    console.log(err);
    return {
      props: {
        post: null,
        ...(await serverSideTranslations(locale!, ['common'])),
      },
      notFound: true,
    };
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await fetch(
    process.env.NEXT_PUBLIC_WP_API + '/wpr/v1/posts?per_page=12'
  ).then((r) => r.json());

  const paths = posts.map((post: any) => {
    return {
      params: { slug: post.slug.toString() },
    };
  });

  return {
    paths,
    fallback: 'blocking',
  };
};
function extractPdfLink(htmlString: string) {
  const regex = /source":"([^"]+)"/;
  const match = htmlString.match(regex);
  if (match && match.length >= 2) {
    return match[1].replace(/\\/g, ''); // Remove backslashes from the link
  }
  return null;
}

Singleblog.getLayout = function getLayout(page: any) {
  return <HomeLayout layout={page.props.layout}>{page}</HomeLayout>;
};
export default Singleblog;
