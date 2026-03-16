import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Gallery from './components/Gallery.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="bg-gray-950 min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}
