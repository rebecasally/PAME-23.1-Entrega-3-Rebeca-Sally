import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Lista from "./components/Lista";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="corpo">
        <Lista></Lista>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
