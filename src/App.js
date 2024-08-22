import './App.css';
import { Routes, Route } from "react-router-dom"
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import Navbar from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import PrivateRoute from './route/PrivateRoute';

// 1. 전체 상품페이지, 로그인, 상품 상세페이지
// 1-1. 네비게이션 바 만들기
// 2. 전체 상품페이지에서는 전체 상품을 볼 수 있다.
// 3. 로그인 버튼을 누르면 로그인 페이지가 나온다.
// 4. 상품디테일을 눌렀으나, 로그인이 안 되어있을 경우에는 로그인 페이지가 나온다
// 5. 로그인이 되어 있으면 상품 디테일 페이지 볼 수 있다
// 6. 로그아웃 버튼을 클릭하면 로그아웃이 된다

// form: 어떤 유저한테 정보를 받고 백엔드로 보내고 싶을 때 사용
// onSubmit: submit에 대해서는 onSubmit이라는 이벤트 줘야 함.
function App() {

  const [authenticate, setAuthenticate] = useState(false)

  useEffect(()=>{
    console.log(authenticate)
  }, [authenticate])

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<Login setAuthenticate={ setAuthenticate }/>} />
        <Route path="/product/:id" element={<PrivateRoute authenticate={ authenticate } />} />
      </Routes>
    </div>
  );
}

export default App;
