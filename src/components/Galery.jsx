
const foto1 =
  'https://live.staticflickr.com/65535/53444744433_8d04cc2c41_m.jpg';

const foto2 =
  'https://live.staticflickr.com/65535/53445018925_aa30b62f8a_m.jpg';

const foto3 =
  'https://live.staticflickr.com/65535/53444609376_01724a913c_m.jpg';

const foto4 =
  'https://live.staticflickr.com/65535/53445018930_b002ba2907_m.jpg';

const foto5 =
  'https://live.staticflickr.com/65535/53444928229_e85e560846_m.jpg';



export const Galery = () => {
  return (
    <div className="flex flex-wrap gap-2 mt-3 content-center ">
      <img className='w-[400px] h-[250px]' src={foto1} alt='foto1' />
      <img className='w-[400px] h-[250px]' src={foto2} alt='foto2' />
      <img className='w-[400px] h-[250px]' src={foto3} alt='foto3' />
      <img className='w-[400px] h-[250px]' src={foto4} alt='foto4' />
      <img className='w-[400px] h-[250px]' src={foto5} alt='foto5' />
    </div>
  );
};
