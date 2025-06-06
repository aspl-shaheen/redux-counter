// src/store/slices/counterSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define a type for the slice state
interface CounterState {
  value: number;
  status: 'idle' | 'loading' | 'failed';
}

// Define the initial state using that type
const initialState: CounterState = {
  value: 0,
  status: 'idle',
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;