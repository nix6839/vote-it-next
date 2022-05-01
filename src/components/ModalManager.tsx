import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { useAppSelector } from '../app/hooks';
import { selectIsVisible } from '../app/modalSlice';
import SignUpModal from './SignUpModal';

export default function ModalManager() {
  const [isBrowser, setIsBrowser] = useState(false);
  const isVisible = useAppSelector(selectIsVisible);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  if (!isVisible || !isBrowser) {
    return null;
  }

  const modalContent = <SignUpModal />;

  return ReactDOM.createPortal(
    modalContent,
    document.getElementById('modal-root')!,
  );
}
