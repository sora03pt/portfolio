
import './Top.scss';
import Main from '../image/main.jpg'

function App() {
  return (
    <div className="top">
      <div className="top__wrap">
        <div>
          <h1>
            <p className="top__text">PORTFOLIO</p>
            <p className="top__title">AURA</p>
            <p>FRONT END ENGINEER</p>
          </h1>
          <div className="container">
            <div className="chevron"></div>
            <div className="chevron"></div>
            <div className="chevron"></div>
          </div>
        </div>
      </div>
      <div className="top__image"></div>
    </div>
  );
}

export default App;
