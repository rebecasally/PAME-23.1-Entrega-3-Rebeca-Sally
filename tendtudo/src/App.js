import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Lista from "./components/Lista";
import Imagem from "./components/Imagem";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Imagem></Imagem>
      <div className="corpo">
        <Lista></Lista>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
