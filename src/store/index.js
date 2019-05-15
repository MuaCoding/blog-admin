import { createStore, applyMiddleware, compose } from 'redux';// 2. 从 redux 中引入 applyMiddleware，applyMiddleware 的作用是应用 redux 中间件// 3. 引入 compose 函数，因为我们用到了两个中间件：redux-thunk 以及 redux-devtools-extension，需要 compose 辅助
import reducer from './reducer'; // 4.引用 reducer.js 中导出的数据

// 1. 从 redux-thunk 中引入 thunk
import thunk from 'redux-thunk';

// 3. 使用 redux-devtools-extension 中间件
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

// 4. 使用 applyMiddleware 对此进行扩展
const enhancer = composeEnhancers(
  applyMiddleware(thunk),
);


// 5.通过 redux 提供的方法 reducer 来构建一个数据存储仓库
const store = createStore(
  reducer,
  enhancer
);

// 6.将 store 导出去

export default store;
