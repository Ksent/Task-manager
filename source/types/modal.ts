type ModalItems = {
  id: string;
}

export type ModalState = {
  modalShow: boolean;
  modalItems: ModalItems[];
}

export interface ICloseModal {
  closeModal: () => void;
}