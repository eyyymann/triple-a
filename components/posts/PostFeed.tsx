import usePosts from '@/hooks/usePosts';

import PostItem from './PostItem';
import { FaSadCry, FaTumblrSquare } from 'react-icons/fa';

interface PostFeedProps {
  userId?: string;
}

const PostFeed: React.FC<PostFeedProps> = ({ userId }) => {
  const { data: posts = [] } = usePosts(userId);

  return (
    <>
      {posts.length == 0 ? 
        <div className='flex flex-col items-center justify-center h-1/3'>
          <FaSadCry color='white' opacity={0.7} size={84}/>
          <p className='text-neutral-400 text-4xl font-semibold'>
            No posts
          </p> 
        </div>
      : null}
      {posts.map((post: Record<string, any>,) => (
        <PostItem userId={userId} key={post.id} data={post} />
      ))}
    </>
  );
};

export default PostFeed;