import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Header from './components/Header';

function App() {

  var classn = "bg-primary";
  return (
    <div>
      <Header />
      <h1 className={classn + "p-3 mt-2"} onClick={() => {alert("Hello World")}}>Hello world</h1>
      <h2>Good bye</h2>
    </div>
  );
}


export default App;
