import { NavBar } from './NavBar';
import logo from '../assets/images/logo.png';

export const Header = () => {
  return (
    <header className='flex place-content-between items-center mb-8'>
      <h1 className='uppercase text-xl'>basakato</h1>
      <h2>Ciudad del Barrio</h2>
      <NavBar />
    </header>
  );
};
