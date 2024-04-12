import './App.css';
import FibonacciChart from './FibonacciChart';

function App() {
  return (
    <div style={{
      width: "100vw", height: "500px", display: "flex", flexDirection: "column",
      alignItems: "center"
    }} >
      <h1>Fibonacci Sequence</h1>
      <div style={{ width: "700px"}} >
        <FibonacciChart count={10} />
      </div>

    </div>
  );
}

export default App;

