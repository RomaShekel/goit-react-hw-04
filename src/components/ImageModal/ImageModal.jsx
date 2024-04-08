import Modal from 'react-modal';
import css from "../ImageModal/ImageModal.module.css"

  export default function ImageModal({data, modalIsOpen, setIsOpen}) {
    
      function closeModal() {
        setIsOpen(false);
      }

      return(
        <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        className={css.content}
        contentLabel="Example Modal">
          <div>
            <img className={css.image} src={data.urls.regular} alt={data.alt_description} />
            <div className={css.divInfo}>
              <p>Likes: {data.likes}</p>
              <p>Autor: {data.user.first_name} {data.user.last_name}</p>
              <p>Added: {data.created_at.slice(0, 10)}</p>
            </div>
        </div>
        </Modal>
      )
  }