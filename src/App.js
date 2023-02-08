// import logo from './logo.svg';
import './App.css';
import Products from "./Components/Products";
const option=(
  <ol>
    <li>TWIN</li>
    <li>BI</li>
    <li>SAE</li>
  </ol>
)
let x="Bonjour" 
var y="tout"
const z="le monde"
const  expression  =  <p>  1  +  1  =  {  1  +  1  }  </p>
var nom="ghada"
var prenom="ghada"
var photo=<img src="logo192.png"></img>
const user={
  username: "test",
  lastname: "ghada"
}

function formatName(user){
  return user.lastname+ "--- "+ user.lastname
}

/////c)Traitement conditionnel)))))))))))))
function disBonjour(user){
  if (user.lastname=='ghada'){
    return <h1> Bonjour {formatName(user)}!</h1>
  }
  return <h1>Bonjour Inconnu</h1>
}
var myStyle={
  fontsize: 100,
  color: 'red'
}
function disBonjour2(user) {
  return (user.prenom=='ghada') ? (<h1>Bonjour, {formatName(user)} !</h1>) :
  (<h1>Bonjour Inconnu.</h1>);
  }
  //d)Manipulation des listes)))
  const numbers = [7, 12, 25, 4, 5];
const listItems = numbers.map((number, index) =>
<li key={index}>{number}</li>);

const max1 = numbers.reduce((a, b) => b > a ? b : a);
// (Une autre façon de faire)
const max = numbers.reduce((a, b) => Math.max(a, b));

const tab = numbers.filter(v => v % 2 == 0).map((v,ind) =>
<li key={ind}>{v * v}</li>);
function App() {
  return (
    <div>
      <h1>Our Products</h1>
      <Products />
    </div>

  );
}

export default App;
