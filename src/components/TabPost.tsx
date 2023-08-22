import type { CollectionEntry } from "astro:content";
import { memo } from "react";
interface Props {
  post: CollectionEntry<"posts">;
}

const Post = memo(function MemoPost({ post }: Props) {
  return (
    <>
      {post.data.imagePath ? (
        <div className="border-zinc-800 border-4 rounded-xl flex justify-center items-center w-80 max-h-96">
          <a
            href={`/posts/${post.slug}`}
            className="inline-flex flex-col h-full w-full"
          >
            <img
              src={post.data.imagePath.src}
              alt="dsd"
              className="rounded-t-md h-1/2 w-full"
            />
            <div className="h-1/2 flex flex-col justify-center py-20">
              <h1 className="text-center text-2xl font-bold my-4 mx-3">
                {post.data.title}
              </h1>
              <h1 className="text-center text-xl font-bold mb-4">
                {post.data.createdAt.toLocaleDateString("pl-PL", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </h1>
            </div>
          </a>
        </div>
      ) : (
        ""
      )}
    </>
  );
});

export default Post;
