import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import KeepWorking from './components/KeepWorking';
function App() {
  return (
    <div className="min-h-screen bg-white text-notion-black">
      <Navbar />
      <Hero />
      <KeepWorking/>
      <Footer />
    </div>
)}
export default App;
