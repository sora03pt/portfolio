
import './Skills.scss';

function App() {
  return (
    <div className="skills">
      <div className="skills__wrap">
        <h2 className="skills__title">Skills &<br/>Proficiencies</h2>
      </div>
      <div className="skills__box">
        <h3 className="skills__sub">コーディングスキル</h3>
        <h4 className="skills__name">HTML,CSS</h4>
        <p className="skills__text">実務経験5年以上</p>
        <h4 className="skills__name">Vue.js</h4>
        <p className="skills__text">実務経験5年以上</p>
        <h4 className="skills__name">React.js</h4>
        <p className="skills__text">勉強中（こちらのサイトはReact.jsで作成してます）</p>
        <h4 className="skills__name">アクセシビリティ</h4>
        <p className="skills__text">実務経験2年以上</p>
        <h4 className="skills__name">SEO（Core Web Vitals）</h4>
        <p className="skills__text">実務経験2年以上</p>
        <h3 className="skills__sub">使用できるツール</h3>
        <ul className="skills__list">
          <li className="skills__name">GitHub</li>
          <li className="skills__name">Adobe Photoshop/Illustrator</li>
          <li className="skills__name">Figma</li>
          <li className="skills__name">canva</li>
          <li className="skills__name">Slack</li>
          <li className="skills__name">Zoom</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
