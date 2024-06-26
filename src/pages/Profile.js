
import './Profile.scss';
import Profile from '../image/profile.jpg'

function App() {
  return (
    <div className="profile">
      <div className='profile__wrap'>
        <img src={Profile} className="profile__image" alt="" width={200} />
      </div>
      <div className='profile__box'>
        <h2 className='profile__title'>自己紹介</h2>
        <p>
        はじめまして、東京在住のフロントエンドエンジニアのあうらと申します。
        奈良出身で、東京への就職を機に移り住みました。<br/>
        主に在宅勤務をしており、運動不足解消のために3年前からヨガを始めています。趣味として漫画やアニメを楽しんでおり、作業時のBGMはアニソンやボカロを愛用しています。<br/>
        最近では『キングダム』に夢中で、全巻レンタルして一気に読みました。<br/><br/>
        京都の美大を卒業後、都内のIT企業にデザイナーとして入社しました。<br/>
        1年目はバナーデザインなどを担当し、主にAdobe PhotoshopとIllustratorを使用していました。<br/>
        2年目には部署異動があり、デザインからコーディングへと業務が変わりました。
        現在はvue.jsなどのフレームワークを使用してフロントエンドの実装を行なっています。
        </p>
      </div>
    </div>
  );
}

export default App;
