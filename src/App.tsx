import './App.css';
import HelloWorld from './hello-world/HelloWorld';
import Logo from './logo/Logo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo/>
        <HelloWorld/>
      </header>
    </div>
  );
}

export default App;
