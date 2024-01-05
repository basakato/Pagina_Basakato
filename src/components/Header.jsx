import logo from '../assets/imgs/logo.png';

export const Header = () => {
  return (
    <header className='flex bg-VeryDarkBlue place-content-around items-center text-OffWhite py-5'>
      <img className='w-[120px]'src={logo} alt="logotipo" />
      <div className='my-2'>
      <h1 className='text-3xl py-2'>Basakato</h1>
      <h2>Ciudad del Barco</h2>
      </div>
    </header>
  );
};
