import React from 'react';
import StoreProvider from './store/StoreProvider';
import { HashRouter } from 'react-router-dom';
import AsideMenu from './components/AsideMenu/AsideMenu';
import Header from './components/Header/Header';
import './App.scss';

const App = () => (
    <StoreProvider>
        <Header />
        <HashRouter>
            <div className='content-wrapper'>

                <AsideMenu />
            </div>
        </HashRouter>
    </StoreProvider>
)

export default App;