export const CardBlog = ({ blog }) => {
  return (
    <div className='h-full w-[400px] m-2 flex-shrink-0 cursor-pointer'>
      <div className='rounded-3xl overflow-hidden mb-4 relative h-[200px]'>
        <img src={`/basakato/imgs/blogpost${blog.id}.jpg`} alt={blog.title} />
      </div>
    </div>
  );
};
