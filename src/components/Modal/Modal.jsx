import { ModalImage, Overlay } from './Modal.styled';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

export const Modal = ({ onClose, largeImg, alt }) => {
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

  return (
    <Overlay onClick={handleBackDropClick}>
      <ModalImage src={`${largeImg}`} alt={`${alt}`} />
    </Overlay>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  handleBackDropClick: PropTypes.func.isRequired,
  handleKeyDown: PropTypes.func.isRequired,
  largeImg: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
