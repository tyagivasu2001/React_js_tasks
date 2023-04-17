import {  configureStore} from '@reduxjs/toolkit'
import { getDataReducer } from './reducer';
const store= configureStore({reducer:getDataReducer});
export default store;