import React, { useState } from "react";
// @ts-ignore
import cls from "./Modal.module.scss";
import { Box, Button } from "@mui/material";
import ModalMUI from "@mui/material/Modal";

interface IModalProps {
  className?: string;
  btnModalClass?: string;
  children?: React.ReactNode;
  btnText: string | React.ReactNode;
}

export const Modal = (props: IModalProps) => {
  const { btnModalClass, children, btnText } = props;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button className={btnModalClass} onClick={handleOpen}>
        {btnText}
      </Button>
      <ModalMUI
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={cls.modalBox}>{children}</Box>
      </ModalMUI>
    </>
  );
};
