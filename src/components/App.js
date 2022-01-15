import logo from '../images/logo.svg';
import "../styles/App.css"
import Contact from './Contact';
import Header from './Header';
import ShoppingList from './ShoppingList';

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{display : 'flex', flexDirection : 'row'}}>
        <ShoppingList />
        <Contact />
      </div>
    </div>
  );
}

export default App;
