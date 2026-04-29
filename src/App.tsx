import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import KeepWorking from "./components/KeepWorking";
import BringAllYour from "./components/BringAllYour";
function App() {
  return (
    <div className="min-h-screen bg-white text-notion-black">
      <Navbar />
      <Hero />
      <KeepWorking/>
      <BringAllYour/>
      <Footer />
    </div>
)}
export default App;
