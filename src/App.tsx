import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import KeepWorking from './components/KeepWorking';
import Askyou from './components/Askyou';
function App() {
  return (
    <div className="min-h-screen bg-white text-notion-black">
      <Navbar />
      <Hero />
      <KeepWorking/>
      <Askyou />
      <Footer />
    </div>
)}
export default App;
