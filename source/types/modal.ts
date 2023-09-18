export interface IModalState {
  modalShow: boolean,
  modalItems: IModalItems[],
}

export interface IModalItems {
  id: string,
}

export interface ICloseModal {
  closeModal: () => void,
}