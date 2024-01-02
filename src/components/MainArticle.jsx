import imageMobile from '../assets/images/sag-fam-mobile.jpg';
import imageDesktop from '../assets/images/sag-fam-desktop.jpg';
import logo from '../assets/images/logo.png';

export const MainArticle = () => {
  return (
    <section>
      <picture>
        <source media='(max-width: 640px)' srcSet={imageMobile} />
        <source media='(min-width: 641px)' srcSet={imageDesktop} />
        <img src={imageMobile} alt='Artículo principal imagen' />
      </picture>
      <div className='sm:flex py-6'>
        <div className='flex-1'>
          <img src={logo} alt="" />

          {/* <h2 className='text-[40px] font-bold sm:text-[58px] leading-none'>
            Apuntaros a la próxima quedada
          </h2> */}
        </div>
        <div className='flex-1 pt-9'>
          <p className='text-[13px] mb-10 sm:text-[15px]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            numquam ratione modi temporibus a nihil earum minima hic ducimus
            maxime, eos nemo accusantium ex explicabo eligendi inventore,
            doloribus nam mollitia?
          </p>
          <button className='bg-SoftRed w-[185px] h-[48px] uppercase text-OffWhite hover:bg-VeryDarkBlue'>
            Apuntaros aquí
          </button>
        </div>
      </div>
    </section>
  );
};
