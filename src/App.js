import logo from './logo.svg';
import './App.css';

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

const Cfooter = () =>{
  return(
    <footer>
      <p> 하단바 입니다. </p>
    </footer>
  );
};

function App() {
  return (
    <div>
      <Hlogo />
      <Anav />
      <Bsection amumal="Hello World!" />
      <Cfooter/>
    </div>
  );
}

export default App;
