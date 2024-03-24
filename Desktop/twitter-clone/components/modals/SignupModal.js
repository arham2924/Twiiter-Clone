import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import { closeSignupModal, openSignupModal } from "@/Redux/modalSlice";

export default function SignupModal() {
//   const [isOpen, setIsOpen] = useState(true);
//   const handleClose = () => setIsOpen(false);
//   const handleOpen = () => setIsOpen(true);

  const isOpen = useSelector(state => state.modals.signupModalOpen);

  return (
    <>
      <button
        onClick={() => dispatch(openSignupModal) }
        className="bg-white border border-white text-Black w-[160px] rounded-full h-[40px] hover:bg-[#cbc2d7]"
      >
        Sign Up
      </button>

      <Modal
        open={isOpen}
        onClose={() => dispatch(closeSignupModal)}
        className="flex justify-center items-center"
      >
        <div className="w-[400px] h-[200px] bg-white">sig up here</div>
      </Modal>
    </>
  );
}
