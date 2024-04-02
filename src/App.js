
import './App.css';
import ColorCycleBtn from './ColorCycleBtn';

function App() {
  const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink', 'brown',]
  return (
    <div className="App">
     <ColorCycleBtn colors={colors}/>
    </div>
  );
}

export default App;
