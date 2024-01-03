import imageMobile from '../assets/images/faldas.jpg';
import imageDesktop from '../assets/images/sombreros.jpg';

export const MainArticle = () => {
  return (
    <section>
      <picture>
        <source media='(max-width: 640px)' srcSet={imageMobile} />
        <source media='(min-width: 641px)' srcSet={imageDesktop} />
        <img src={imageMobile} alt='Artículo principal imagen' />
      </picture>
      <div className='sm:flex py-6'>
        <p className='text-[13px] mb-10 sm:text-[15px]'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam numquam
          ratione modi temporibus a nihil earum minima hic ducimus maxime, eos
          nemo accusantium ex explicabo eligendi inventore, doloribus nam
          mollitia?
        </p>
      </div>
    </section>
  );
};
