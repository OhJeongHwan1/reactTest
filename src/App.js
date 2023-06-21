import logo from './logo.svg';
import './App.css';
import Counter from './usestate'
import InputSample from './inputSample'

const Hlogo = () => {
  return (
    <header>
      <h1>Logo</h1>
    </header>
  );
};

const Anav = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="#">메뉴1</a>
        </li>
        <li>
          <a href="#">메뉴2</a>
        </li>
      </ul>
    </nav>
  );
};

const Bsection = ({ amumal }) => {
  return (
    <section>
      <p>{amumal}</p>
    </section>
  );
};

function Cfooter ({istrue}){
  return(
    <footer>
      {istrue && <b>진실입니다</b>}
      안녕
    </footer>
  );
};

Cfooter.defaultProps ={
  istrue: true
}
function App() {
  return (
    <div>
      <Hlogo />
      <Anav />
      <Bsection amumal="Hello World!" />
      <Cfooter/>
      <Counter/>
      <InputSample />
    </div>
  );
}

export default App;
