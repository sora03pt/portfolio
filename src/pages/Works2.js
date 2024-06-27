
import { useState } from "react";

import './Works2.scss';
import works01 from '../image/works/01.jpg'
import works02 from '../image/works/02.jpg'
import works03 from '../image/works/03.jpg'
import works04 from '../image/works/04.jpg'
import works1 from '../image/works/1.jpg'
import works2 from '../image/works/2.jpg'
import works3 from '../image/works/3.jpg'
import works4 from '../image/works/4.jpg'

import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    height: "90%",
    width: "90%",
    transform: "translate(-50%, -50%)",
  },
};

function App() {
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);

  const closeModal = () => {
    setEditModalIsOpen(false);
  };

  return (
    <div className="works2">
      <div className="works2__box" onClick={() => {
          setEditModalIsOpen(true);
        }}>
        <div className="works2__wrap">
          <img src={works01} alt="" />
        </div>
        <p className="works2__text">
            学校の課題で作成<br/><br/>
          <span className="works2__bold">制作期間</span>:3h（デザインのみ）<br/>
          <span className="works2__bold">使用ツール</span>:Photoshop
        </p>
      </div>
      <div className="works2__box" onClick={() => {
          setEditModalIsOpen(true);
        }}>
        <div className="works2__wrap">
          <img src={works02} alt="" />
        </div>
        <p className="works2__text">
            学校の課題で作成<br/><br/>
          <span className="works2__bold">制作期間</span>:3h（デザインのみ）<br/>
          <span className="works2__bold">使用ツール</span>:Photoshop
        </p>
      </div>
      <div className="works2__box" onClick={() => {
          setEditModalIsOpen(true);
        }}>
        <div className="works2__wrap">
          <img src={works03} alt="" />
        </div>
        <p className="works2__text">
            学校の課題で作成<br/><br/>
          <span className="works2__bold">制作期間</span>:3h（デザインのみ）<br/>
          <span className="works2__bold">使用ツール</span>:Photoshop
        </p>
      </div>
      <div className="works2__box" onClick={() => {
          setEditModalIsOpen(true);
        }}>
        <div className="works2__wrap">
          <img src={works04} alt="" />
        </div>
        <p className="works2__text">
            学校の課題で作成<br/><br/>
          <span className="works2__bold">制作期間</span>:3h（デザインのみ）<br/>
          <span className="works2__bold">使用ツール</span>:Photoshop
        </p>
      </div>
      <Modal
        isOpen={editModalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}>
          <div className='modal'>
            <img src={works1} alt="" className="modal__image" />
          </div>
      </Modal>
    </div>
  );
}

export default App;
