import './App.css';
import Input from "./components/Input";
import Output from './components/Output';
import {AppContextProvider } from './context/AppContext';

function App() {
  return (
    <AppContextProvider>
      <div className="App">
        <Input />
        <Output />
      </div>
    </AppContextProvider>
  );
}

export default App;
