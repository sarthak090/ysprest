import Link from 'next/link';
import React from 'react';

function LatestBlogs(props: any) {
  const { posts } = props;
  function cropStringTo200Words(inputString) {
    // Split the string into an array of words
    const words = inputString.split(' ');

    // Initialize variables
    let croppedWords = [];
    let wordCount = 0;

    // Iterate through the words and add them to the cropped array until word count reaches 200
    for (const word of words) {
      if (wordCount + word.length + 1 <= 200) {
        // +1 to account for the space between words
        croppedWords.push(word);
        wordCount += word.length + 1;
      } else {
        break;
      }
    }

    // Join the selected words back together to form the cropped string
    const croppedString = croppedWords.join(' ');

    return croppedString;
  }

  return (
    <div>
      <div className="mt-4 text-2xl font-semibold lg:mt-8">Latest Blog</div>
      <div className="my-8 grid gap-6 lg:grid-cols-3">
        {posts.length > 0 &&
          posts.slice(0, 3).map((post) => (
            <Link href={`/blog/${post.slug}`}>
              <div
                className="rounded-md border p-2  shadow-700 hover:cursor-pointer"
                key={post.id}
              >
                <div>
                  <img
                    src={post.featuredImg.large}
                    alt={post.title.rendered}
                    width={350}
                    height={300}
                    className="rounded"
                  />
                </div>
                <div className="text-2xl font-semibold">
                  {post.title.rendered}
                </div>
                <div className="my-2 flex justify-between text-red-600">
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {post.author.name}
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
                        clipRule="evenodd"
                      />
                    </svg>

                    {post.date}
                  </div>
                </div>
                <div>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: cropStringTo200Words(post.excerpt.rendered),
                    }}
                  />
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default LatestBlogs;
