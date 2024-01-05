import Carousel from './components/Carousel';
import { Header } from './components/Header';
import { NewContainer } from './components/NewContainer';

function App() {
  return (
    <main className='px-4 pt-6'>
      <Header />
      <Carousel/>
      <NewContainer/>
    </main>
  );
}

export default App;
