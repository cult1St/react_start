import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css';
import Header from './components/Header';
import Table from "./components/Table";
import Products from "./components/Products";
import Handler from "./components/Handler";
import Election from "./components/Election";

function App() {

  var classn = "bg-primary";
  var name = "Wealth";
  var adjustedPrice=[
      {"product":"Diesel","price":1320},
      {"product":"PMS","price":680},
      {"product":"Kerosene","price":670}
    ]
    
  return (
    <div>
      {/* <Header name={name} />
      <h1 className={classn + "p-3 mt-2"} onClick={() => {alert("Hello World")}}>Hello world</h1>
      <h2>Good bye</h2>
      <h3 className="text-mute">Table Below</h3>
      <Table />
      <Products products={adjustedPrice} /> */}
      {/* <Handler /> */}
      <Election />
    </div>
  );
}


export default App;
