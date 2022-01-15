import logo from '../images/logo.svg';
import "../styles/App.css"
import Header from './Header';
import ShoppingList from './ShoppingList';

function App() {
  return (
    <div className="App">
      <Header />
      <ShoppingList />
    </div>
  );
}

export default App;
