import { createSlice } from "@reduxjs/toolkit";

const defaultData = {
  round: 1,
  victoryPoints: 0,
  commandPoints: 0,
};
const appData = JSON.parse(localStorage.getItem("wahacounter")) || defaultData;
const initialState = appData;

export const counterSlice = createSlice({
  name: "counterSlice",
  initialState,
  reducers: {
    increment: (state, action) => {
      if (action.payload.target === "rounds") {
        if (state.round + action.payload.amount >= 5) {
          state.round = 5;
        } else {
          state.round += action.payload.amount;
        }
        localStorage.setItem(
          "wahacounter",
          JSON.stringify({ ...initialState, round: state.round })
        );
      }
      if (action.payload.target === "VPs") {
        state.victoryPoints += action.payload.amount;
        localStorage.setItem(
          "wahacounter",
          JSON.stringify({
            ...initialState,
            victoryPoints: state.victoryPoints,
          })
        );
      }
      if (action.payload.target === "CPs") {
        state.commandPoints += action.payload.amount;
        localStorage.setItem(
          "wahacounter",
          JSON.stringify({
            ...initialState,
            commandPoints: state.commandPoints,
          })
        );
      }
    },
    decrement: (state, action) => {
      if (action.payload.target === "rounds") {
        if (state.round - action.payload.amount <= 1) {
          state.round = 1;
        } else {
          state.round -= action.payload.amount;
        }
        localStorage.setItem(
          "wahacounter",
          JSON.stringify({ ...initialState, round: state.round })
        );
      }
      if (action.payload.target === "VPs") {
        if (state.victoryPoints - action.payload.amount <= 0) {
          state.victoryPoints = 0;
        } else {
          state.victoryPoints -= action.payload.amount;
        }
        localStorage.setItem(
          "wahacounter",
          JSON.stringify({
            ...initialState,
            victoryPoints: state.victoryPoints,
          })
        );
      }
      if (action.payload.target === "CPs") {
        if (state.commandPoints - action.payload.amount <= 0) {
          state.commandPoints = 0;
        } else {
          state.commandPoints -= action.payload.amount;
        }
        localStorage.setItem(
          "wahacounter",
          JSON.stringify({
            ...initialState,
            commandPoints: state.commandPoints,
          })
        );
      }
    },
    reset: (state) => {
      state.round = 1;
      state.victoryPoints = 0;
      state.commandPoints = 0;
      localStorage.setItem("wahacounter", JSON.stringify(defaultData));
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
