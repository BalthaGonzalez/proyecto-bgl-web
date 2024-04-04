import { Outlet } from "react-router-dom";
import Maincontainer from '../../components/maincontainer/maincontainer'
import Header from '../../components/header/header'

export const Root = () => {
    return (
        <Maincontainer>
            <Header />
            <Outlet />
        </Maincontainer>
    )
}