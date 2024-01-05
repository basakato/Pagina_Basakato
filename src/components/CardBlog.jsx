export const CardBlog = ({ blog }) => {
  return (
    <div className='h-[200px] w-[350px] m-2 flex-shrink-0'>
      <div className='rounded-xl overflow-hidden relative h-[200px]'>
        <img src={`/basakato/imgs/blogpost${blog.id}.jpg`} alt={blog.title} />
      </div>
    </div>
  );
};
