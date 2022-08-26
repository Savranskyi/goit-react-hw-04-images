import { useEffect } from 'react';
import { ModalImage, Overlay } from './Modal.styled';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modalRoot');

// export class Modal extends React.Component {
//   static protoType = {
//     onClose: PropTypes.func.isRequired,
//   };
//   componentDidMount() {
//     window.addEventListener('keydown', this.handleKeyDown);
//   }
//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleKeyDown);
//   }
//   handleKeyDown = e => {
//     if (e.code === 'Escape') {
//       this.props.onClose();
//     }
//   };
//   handleBackDropClick = e => {
//     if (e.target === e.currentTarget) {
//       this.props.onClose();
//     }
//   };
//   render() {
//     return createPortal(
//       <Overlay onClick={this.handleBackDropClick}>
//         <ModalImage>{this.props.children}</ModalImage>
//       </Overlay>,
//       modalRoot
//     );
//   }
// }

export const Modal = ({ onClose, largeImg }) => {
  useEffect(() => {
    //componentDidMount
    window.addEventListener('keydown', handleKeyDown);

    //componentWillUnmount
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  function handleKeyDown(e, handleKey = 'Escape') {
    if (e.code === handleKey) {
      onClose();
    }
  }
  const handleBackDropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <Overlay onClick={handleBackDropClick}>
      <ModalImage src={largeImg} alt="Фото" />
    </Overlay>,
    modalRoot
  );
};

Modal.protoType = {
  onClose: PropTypes.func.isRequired,
};
