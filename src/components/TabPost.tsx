import type { CollectionEntry } from 'astro:content';
import { memo } from 'react';
interface Props {
  post: CollectionEntry<'posts'>;
}

const Post = memo(function MemoPost({ post }: Props) {
  return (
    <>
      {post.data.imagePath ? (
        <div className='border-zinc-800 border-4 rounded-xl flex justify-center items-center w-80'>
          <a href={`/posts/${post.slug}`}>
            <img src={post.data.imagePath.src} alt='dsd' height={'200'} />
            <h1 className='text-center text-2xl font-bold my-4 mx-3'>
              {post.data.title}
            </h1>
            <h1 className='text-center text-xl font-bold mb-4'>
              {post.data.createdAt.toLocaleDateString('pl-PL', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </h1>
          </a>
        </div>
      ) : (
        ''
      )}
    </>
  );
});

export default Post;
