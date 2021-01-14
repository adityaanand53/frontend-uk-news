import "./App.scss";

import { BrowserRouter } from "react-router-dom";

import News from "./containers/News";
import Header from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>
        <section>
          <News></News>
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
