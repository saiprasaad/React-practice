import './App.css';
import { Navbar } from './components/Navbar';
import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './helpers/store';
import { OptimizedComponent } from './components/OptimizedComponent';
import { UserForm } from './components/UserForm';
import counterStore from './helpers/counterstore';
import { Counter } from './components/Counter';
import { Catfact } from './components/Catfact';
import { QueryClient, QueryClientProvider } from 'react-query';

function App() {

  const client = new QueryClient({});

  return (
    <div className="App">
      <QueryClientProvider client={client}>
      <Catfact />
      </QueryClientProvider>
    </div>

  );
}

const AppWrapper = () => (
  <Provider store = {counterStore}>
   <App />
   </Provider>
);

export default App;
