import { CardBlog } from './CardBlog.jsx';
/* import blogs from './data/data.js'; */

const blogs = [
  {
    id: 1,
    title: 'Armonía en el Plato: Ensalada Vibrante de Superfoods',
    description:
      'Esta imagen captura una ensalada nutritiva que es un festival de colores y texturas, ofreciendo un equilibrio perfecto entre salud y sabor. La base de hojas verdes crujientes se complementa con rodajas de aguacate cremoso y hortalizas frescas como tomates cherry jugosos, tiras de remolacha y zanahoria crujiente. El toque de proteína viene en forma de garbanzos y cubos de batata asada, todo ello aderezado con un aliño ligero que realza los sabores naturales. Pequeños brotes y semillas de chía esparcidos por encima añaden un acabado nutritivo y estéticamente agradable a la composición. Este plato no solo es un deleite visual, sino también un homenaje a los ingredientes orgánicos y de origen local, invitando a disfrutar de la comida consciente y saludable.',
    category: 'gastronomía',
    author: 'Jhon Doe',
    date: '18 de Noviembre - 2023',
  },
  {
    id: 2,
    title: 'Noche de Gourmet: Un Clásico Reinventado',
    description:
      'Mientras esta imagen evoca la esencia de un clásico hamburguesa gourmet, permite que nuestra imaginación divague hacia las históricas tabernas de Nueva York a principios del siglo XX, donde el bullicio de la ciudad encontraba consuelo en platos robustos. La tradición culinaria americana se entrelaza con la innovación moderna, transformando simples ingredientes en una experiencia culinaria que trasciende el tiempo. Cada mordida es una narrativa de sabores que habla de calidad, artesanía y la búsqueda constante del sabor perfecto en los rincones más vibrantes y diversos de la cultura urbana.',
    category: 'gastronomía',
    author: 'Jhon Doe',
    date: '18 de Noviembre - 2023',
  },
  {
    id: 3,
    title: 'Al atardecer: Velocidad y Libertad',
    description:
      ' La imagen de este automóvil azul deportivo, capturado en el crepúsculo del desierto, nos lleva a un viaje por la Ruta 66, la carretera más emblemática de América. Nos remonta a la época dorada de los viajes por carretera, un símbolo de aventura y libertad. Este coche no es solo un medio de transporte, sino una cápsula de tiempo que conecta el pasado con el presente, invitando a explorar horizontes desconocidos y a sentir el poder de la máquina y el camino bajo nuestros pies.',
    category: 'automovilismo',
    author: 'Jhon Doe',
    date: '18 de Noviembre - 2023',
  },
  {
    id: 4,
    title: 'lorem ipsum vita est',
    description:
      ' La imagen de este automóvil azul deportivo, capturado en el crepúsculo del desierto, nos lleva a un viaje por la Ruta 66, la carretera más emblemática de América. Nos remonta a la época dorada de los viajes por carretera, un símbolo de aventura y libertad. Este coche no es solo un medio de transporte, sino una cápsula de tiempo que conecta el pasado con el presente, invitando a explorar horizontes desconocidos y a sentir el poder de la máquina y el camino bajo nuestros pies.',
    category: 'alimentacion',
    author: 'Jacobo Doe',
    date: '18 de Noviembre - 2023',
  },
  {
    id: 5,
    title: 'lorem ipsum vita est',
    description:
      ' La imagen de este automóvil azul deportivo, capturado en el crepúsculo del desierto, nos lleva a un viaje por la Ruta 66, la carretera más emblemática de América. Nos remonta a la época dorada de los viajes por carretera, un símbolo de aventura y libertad. Este coche no es solo un medio de transporte, sino una cápsula de tiempo que conecta el pasado con el presente, invitando a explorar horizontes desconocidos y a sentir el poder de la máquina y el camino bajo nuestros pies.',
    category: 'alimentacion',
    author: 'Jacobo Doe',
    date: '18 de Noviembre - 2023',
  },
  {
    id: 6,
    title: 'lorem ipsum vita est',
    description:
      ' La imagen de este automóvil azul deportivo, capturado en el crepúsculo del desierto, nos lleva a un viaje por la Ruta 66, la carretera más emblemática de América. Nos remonta a la época dorada de los viajes por carretera, un símbolo de aventura y libertad. Este coche no es solo un medio de transporte, sino una cápsula de tiempo que conecta el pasado con el presente, invitando a explorar horizontes desconocidos y a sentir el poder de la máquina y el camino bajo nuestros pies.',
    category: 'alimentacion',
    author: 'Jacobo Doe',
    date: '18 de Noviembre - 2023',
  },
  {
    id: 7,
    title: 'lorem ipsum vita est',
    description:
      ' La imagen de este automóvil azul deportivo, capturado en el crepúsculo del desierto, nos lleva a un viaje por la Ruta 66, la carretera más emblemática de América. Nos remonta a la época dorada de los viajes por carretera, un símbolo de aventura y libertad. Este coche no es solo un medio de transporte, sino una cápsula de tiempo que conecta el pasado con el presente, invitando a explorar horizontes desconocidos y a sentir el poder de la máquina y el camino bajo nuestros pies.',
    category: 'alimentacion',
    author: 'Jacobo Doe',
    date: '18 de Noviembre - 2023',
  },
  {
    id: 8,
    title: 'lorem ipsum vita est',
    description:
      ' La imagen de este automóvil azul deportivo, capturado en el crepúsculo del desierto, nos lleva a un viaje por la Ruta 66, la carretera más emblemática de América. Nos remonta a la época dorada de los viajes por carretera, un símbolo de aventura y libertad. Este coche no es solo un medio de transporte, sino una cápsula de tiempo que conecta el pasado con el presente, invitando a explorar horizontes desconocidos y a sentir el poder de la máquina y el camino bajo nuestros pies.',
    category: 'alimentacion',
    author: 'Jacobo Doe',
    date: '18 de Noviembre - 2023',
  },
  {
    id: 9,
    title: 'lorem ipsum vita est',
    description:
      ' La imagen de este automóvil azul deportivo, capturado en el crepúsculo del desierto, nos lleva a un viaje por la Ruta 66, la carretera más emblemática de América. Nos remonta a la época dorada de los viajes por carretera, un símbolo de aventura y libertad. Este coche no es solo un medio de transporte, sino una cápsula de tiempo que conecta el pasado con el presente, invitando a explorar horizontes desconocidos y a sentir el poder de la máquina y el camino bajo nuestros pies.',
    category: 'alimentacion',
    author: 'Jacobo Doe',
    date: '18 de Noviembre - 2023',
  },
];

function Carousel() {
  const carouselBlogs = [...blogs, ...blogs];

  return (
    <div className='overflow-hidden my-1'>
      <div className='flex whitespace-nowrap animate-scroll'>
        {carouselBlogs.map((blog, index) => (
          <CardBlog blog={blog} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
