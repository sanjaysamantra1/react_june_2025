import './App.css';
import Navbar from './components/navbar/Navbar'
import Categories from './components/categories/Categories'
import Carousel from './components/carousel/Carousel'
import Body from './components/body/Body'
import Footer from './components/footer/Footer'

function App() {
  return (
    <>
      <Navbar />
      {/* <Categories></Categories>
      <Carousel /> */}
      <Body />
      <Footer />
    </>
  );
}
export default App;
