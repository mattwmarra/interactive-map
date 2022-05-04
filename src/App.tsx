import './App.scss'
import { Map } from './Map';
import { StateList } from './StateList';

function App() {
  return (
    <div className="App">
      <h1>Bronco Student Center Interactive Map</h1>
      <main>
         <Map/>
         <StateList />
      </main>
    </div>
  )
}

export default App
