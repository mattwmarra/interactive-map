import "./App.scss";
import { BSCMap } from "./BSCMap";
import { StateList } from "./StateList";

function App() {
  return (
    <div className="App">
      <h1>Bronco Student Center Interactive Map</h1>
      <main>
        <BSCMap />
        <StateList />
      </main>
    </div>
  );
}

export default App;
