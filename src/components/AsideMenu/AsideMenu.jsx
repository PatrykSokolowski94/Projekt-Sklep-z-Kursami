import React, { useContext } from 'react';
import bemCssModules from 'bem-css-modules';
import UserMenu from './subcomponents/UserMenu';
import AdminMenu from './subcomponents/AdminMenu';

import { StoreContext } from '../../store/StoreProvider';


import { default as AsideMenuStyles } from './AsideMenu.module.scss';
const style = bemCssModules(AsideMenuStyles)

const AsideMenu = () => {
    const { user } = useContext(StoreContext);

    const adminMenuComponent = user && user.accessLevel === 1 ? <AdminMenu /> : null;

    return (
        <section className={style()}>
            <UserMenu isUserLogged={Boolean(user)} />
            {adminMenuComponent}
        </section>

    );
}

export default AsideMenu;
