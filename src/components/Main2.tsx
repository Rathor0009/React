import React from 'react';
import { Routes, Route } from 'react-router-dom';
const Home = React.lazy(() => import('./Home'));
const Login = React.lazy(() => import('./Login'));
const Register = React.lazy(() => import('./Register'));
const Loading = () => <p>Loading ...</p>;

class Main2 extends React.Component {
    render() {
        return (
            <React.Suspense fallback={<Loading />}>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
            </Routes>
            </React.Suspense>
        );
    }
}
export default Main2;