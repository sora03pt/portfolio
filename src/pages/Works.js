
import { useState } from "react";

import './Works.scss';
import works05 from '../image/works/05.jpg'
import works5 from '../image/works/5.jpg'
import works52 from '../image/works/5-2.jpg'

import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    height: "80%",
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
    <div className="works">
      <div className="works__box" onClick={() => {
          setEditModalIsOpen(true);
        }}>
        <div className="works__wrap">
          <h2 className="works__title">website</h2>
          <img src={works05} alt="飲食店サイト" />
          <p className="works__text">
            実際にある飲食店のサイトを作成させていただきました。<br/><br/>
            <span className="works__bold">制作期間</span>:1ヶ月（デザイン（写真撮影含む）〜コーディング）<br/>
            <span className="works__bold">使用ツール</span>:Photoshop、atom
          </p>
        </div>
        <div className="works__wrap--image">
          <img src={works5} alt="" className="works__image" />
          <img src={works52} alt="" className="works__image" />
        </div>
      </div>
      <Modal
        isOpen={editModalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}>
          <div className='modal'>
            <div className='modal__wrap'>
              <img src={works5} alt="" className="modal__image--pc" />
              <img src={works52} alt="" className="modal__image--sp" />
            </div>
          </div>
      </Modal>
    </div>
  );
}

export default App;
