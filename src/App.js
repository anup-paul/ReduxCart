import logo from './logo.svg';
import './App.css';
import Cart from './Components/Cart/Cart';
import Shop from './Components/Shop/Shop';

function App() {
  return (
    <div >
      <div className="row" >
        <div className="col-md-9 border-end">
          <Shop></Shop>
        </div>
        <div className="col-md-3" >
          <Cart></Cart>
        </div>
      </div>
    </div>
  );
}

export default App;
