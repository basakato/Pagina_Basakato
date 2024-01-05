import Carousel from './components/Carousel';
import { Galery } from './components/Galery';
import { Header } from './components/Header';
import { NewContainer } from './components/NewContainer';

function App() {
  return (
    <main>
      <Header />
      <Carousel/>
      <NewContainer/>
      <Galery/>
    </main>
  );
}

export default App;
