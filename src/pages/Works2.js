
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
  const [editModalIsOpen1, setEditModalIsOpen1] = useState(false);
  const [editModalIsOpen2, setEditModalIsOpen2] = useState(false);
  const [editModalIsOpen3, setEditModalIsOpen3] = useState(false);
  const [editModalIsOpen4, setEditModalIsOpen4] = useState(false);

  const closeModal1 = () => {
    setEditModalIsOpen1(false);
  };

  const closeModal2 = () => {
    setEditModalIsOpen2(false);
  };

  const closeModal3 = () => {
    setEditModalIsOpen3(false);
  };

  const closeModal4 = () => {
    setEditModalIsOpen4(false);
  };

  return (
    <div className="works2">
      <div className="works2__box" onClick={() => {
          setEditModalIsOpen1(true);
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
          setEditModalIsOpen2(true);
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
      <div className="works2__box"  onClick={() => {
          setEditModalIsOpen3(true);
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
          setEditModalIsOpen4(true);
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
        isOpen={editModalIsOpen1}
        onRequestClose={closeModal1}
        style={customStyles}>
          <div className='modal'>
            <img src={works1} alt="" className="modal__image" />
          </div>
      </Modal>
      <Modal
        isOpen={editModalIsOpen2}
        onRequestClose={closeModal2}
        style={customStyles}>
          <div className='modal'>
            <img src={works2} alt="" className="modal__image" />
          </div>
      </Modal>
      <Modal
        isOpen={editModalIsOpen3}
        onRequestClose={closeModal3}
        style={customStyles}>
          <div className='modal'>
            <img src={works3} alt="" className="modal__image" />
          </div>
      </Modal>
      <Modal
        isOpen={editModalIsOpen4}
        onRequestClose={closeModal4}
        style={customStyles}>
          <div className='modal'>
            <img src={works4} alt="" className="modal__image" />
          </div>
      </Modal>
    </div>
  );
}

export default App;
