import iconMenu from '../assets/images/favicon.png';

export const NavBar = () => {
  return (
    <>
      <ul className='hidden sm:flex text-[18px] sm:w-[438px] sm:place-content-around sm:text-[16px] sm:items-center'>
        <li>
          <a href='#'>Inicio</a>
        </li>
        <li>
          <a href='#'>Próximo encuentro</a>
        </li>
        <li>
          <a href='#'>Noticias</a>
        </li>
        <li>
          <a href='#'>Miembros</a>
        </li>
        <li>
          <a href='#'>Contacto</a>
        </li>
      </ul>
      <img
        className='w-12 h-12 cursor-pointer sm:hidden'
        src={iconMenu}
        alt='Menu hamburguesa'
      />
    </>
  );
};
