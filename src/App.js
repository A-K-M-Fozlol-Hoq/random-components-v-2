import logo from './logo.svg';
import './App.css';
import WheelOfFortune from './components/OmniHouse/WheelOfFortune/WheelOfFortune';

function App() {
  let places = ['One', 'Two', 'Three'];

  return (
    <div className="App">
      <WheelOfFortune items={places}></WheelOfFortune>
    </div>
  );
}

export default App;
