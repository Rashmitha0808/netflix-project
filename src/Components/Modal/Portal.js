import React from "react";
import { createPortal } from "react-dom";
import "../Modal/Modal.css";
export default function Portal({ onClose, children }) {
  const handleClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return createPortal(
    <div onClick={handleClick} className="portal">
      {children}
    </div>,
    document.body
  );
}
