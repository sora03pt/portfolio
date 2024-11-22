
import './Footer.scss';
import github from '../image/icon/github.svg'
import mail from '../image/icon/mail.svg'

function App() {
  return (
    <div className="footer">
      <div className="footer__wrap">
        <h2 className="footer__title">Connect</h2>
        <h3 className="footer__name">MAYU</h3>
        <p className='footer__mail'>sora03pt@yahoo.co.jp</p>
        <a className="footer__icon" href="mailto:sora03pt@yahoo.co.jp">
          <img src={mail} alt="mail" width={30} height={30} />
        </a>
        <a className="footer__icon" href="https://github.com/sora03pt" target="_blank" rel="noopener noreferrer">
          <img src={github} alt="git" width={30} height={29} />
        </a>
      </div>
      <div className="footer__label">&copy; MAYU</div>
    </div>
  );
}

export default App;
