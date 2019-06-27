// 引入 actionTypes
import { SEARCH_FOCUS_OR_BLUR } from "./actionTypes";
// 1. 把 axios 从 TodoList.js 中剪切到 actionCreators.js 中
import axios from "axios";
//2.导出相应的action

export const searchFocusOrBlur = () => ({
  type: SEARCH_FOCUS_OR_BLUR,
});
