// index.ts 文件

import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./festures/counterSlice";

// configureStore创建一个redux数据
const store = configureStore({
	// 合并多个Slice
	reducer: {
		counter: counterSlice
	},
});

export default store;


