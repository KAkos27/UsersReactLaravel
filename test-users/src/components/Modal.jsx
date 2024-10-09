import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children, error }) => {
    const modalRef = useRef();

    useEffect(() => {
        error && modalRef.current.showModal();
    }, [error]);

    return createPortal(
        <dialog ref={modalRef}>
            {children}
            <form method="dialog">
                <button>OK</button>
            </form>
        </dialog>,
        document.getElementById("modal-root")
    );
};

export default Modal;
