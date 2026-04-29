import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import KeepWorking from "./components/KeepWorking";
import Askyou from "./components/Askyou";
import BringAllYour from "./components/BringAllYour";
import MoreProductivity from "./components/MoreProductivity";
import TrustedByTeams from "./components/TrustedByTeams";
import TryForFree from "./components/TryForFree";
function App() {
  return (
    <div className="min-h-screen bg-white text-notion-black">
      <Navbar />
      <Hero />
      <KeepWorking/>
      <Askyou/>
      <BringAllYour/>
      <MoreProductivity/>
      <TrustedByTeams/>
      <TryForFree/>
      <Footer />
    </div>
)}
export default App;
