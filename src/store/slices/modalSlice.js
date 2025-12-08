import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isOpen: false,
    modalType: null  // "login", "details", "menu", "cart", etc.
  },
  reducers: {
    openModal(state, action) {
      state.isOpen = true;
      state.modalType = action.payload;   // e.g. openModal("login")
    },
    closeModal(state) {
      state.isOpen = false;
      state.modalType = null;
    }
  }
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
