import "./App.css";
import { Header } from "./components/Header";
import { Agency } from "./components/Agency";
import { Count } from "./components/Count";
import { Team } from "./components/Team";
import { Service } from "./components/Service";
import { HostingPlans } from "./components/HostingPlans";
import { InputEmail } from "./components/InputEmail";
import { WorkPlace } from "./components/WorkPlace";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Agency />
      <Count />
      <Team />
      <Service />
      <HostingPlans />
      <InputEmail />
      <WorkPlace />
      <Footer />
    </div>
  );
}

export default App;
