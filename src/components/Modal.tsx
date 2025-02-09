import { FaExclamation } from "react-icons/fa";

interface Props {
  className: string;
  title?: string;
  children: string;
}

const Modal = ({ className, title, children }: Props) => {
  return (
    <div className={`flex gap align--center modal ${className}`}>
      <FaExclamation
        className="icon--warning"
        size={25}
        color="var(--color-text)"
      />
      <div className="modal__content">
        {title && <h3 className="modal__title">{title}</h3>}
        <p>{children}</p>
      </div>
    </div>
  );
};

export default Modal;
