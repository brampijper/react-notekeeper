/* 

The Redux store is the main, central bucket which stores all the states of an application. 
It should be considered and maintained as a single source of truth for the state of the application.

*/

"use client";
import { combineReducers, configureStore  } from "@reduxjs/toolkit";
import counterReducer from "./Features/Counter/counterSlice";
// import notesReducer from  "./Features/Notes/notesSlice";

const rootReducer = combineReducers({
  counter: counterReducer,
  // notes: notesReducer
  //add all your reducers here
},);

export const store = configureStore({
  reducer: rootReducer,

 });
