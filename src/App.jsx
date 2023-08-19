import "./App.scss";
import Cards from "./components/First/Cards";
import FirstTask from "./components/First/FirstTask";
import MultiToggle from "./components/Second/MultiToggle";
import ReactTabs from "./components/Second/ReactTabs";
import TogglePop from "./components/Second/TogglePop";
import ModalBase from "./components/Third/ModalBase";

function App() {
  return (
    <div className="app">
      <FirstTask />
      <Cards />
      <ReactTabs />
      <TogglePop />
      <MultiToggle />
      <ModalBase />
    </div>
  );
}

export default App;