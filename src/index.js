import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { applyMiddleware, compose, createStore } from 'redux';
import reducers from "./reducers";
import App from './App';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Dashboard from './pages/dashboard/dashboard.page';
import ProductDetail from './pages/productDetail/productDetail.page';

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Provider store={store}>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/dashboard/:userId" element={<Dashboard />} />
      <Route path="/productDetail/:identifier" element={<ProductDetail/>}/>
    </Routes>
  </Provider>
</BrowserRouter>
);
