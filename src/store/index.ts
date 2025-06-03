// src/store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slice/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// import { configureStore } from '@reduxjs/toolkit';
// import userReducer from './slice/userSlice';
// import postsReducer from './slice/postsSlice';
// import uiReducer from './slice/uiSlice';

// export const store = configureStore({
//   reducer: {
//     user: userReducer,
//     posts: postsReducer,
//     ui: uiReducer,
//   },
//   // Optional: Add middleware here
//   middleware: (getDefaultMiddleware) => 
//     getDefaultMiddleware({
//       serializableCheck: {
//         // Ignore these action types
//         ignoredActions: ['your-non-serializable-action'],
//         // Ignore these field paths in all actions
//         ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
//         // Ignore these paths in the state
//         ignoredPaths: ['user.someNonSerializableField'],
//       },
//     }),
// });

// // Export types for TypeScript
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;