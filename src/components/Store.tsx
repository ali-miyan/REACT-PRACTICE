import { configureStore } from "@reduxjs/toolkit";
import ReduxToolKit from "./ReduxToolKit";

const store = configureStore({
    reducer:{
        value:ReduxToolKit
    }
})

export default store;