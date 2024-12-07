
import './App.css';
import { GlobalProvider } from './Contexto/Contexto';
import { MainLayout } from './MainLayout';

function App() {
  return (
    <div className="App">
      <GlobalProvider>
     <MainLayout/>
     </GlobalProvider>
    </div>
  );
}

export default App;
