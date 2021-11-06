import { useRecoilState } from "recoil"
import { modalState } from "../atoms/ModalAtom";

function Modal() {

    const [open , setOpen] = useRecoilState(modalState);

    return (
        <div>
            <h1>I am modal</h1>

            {open &&
            <p>Modal Is open</p>}
        </div>
    )
}

export default Modal
