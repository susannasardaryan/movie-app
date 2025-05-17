import {NavLink} from "react-router";
import {HOME_PATH, MOVIES_HOME_PATH} from "../routes/paths.ts";
import type {ReactNode} from "react";
import {Button, Flex} from "antd";
import {useNavigate} from "react-router-dom";
import {StorageService} from "../services/apiService.ts";
import {setInfo} from "../features/login/loginSlice.ts";
import { useAppDispatch } from "../app/hooks.ts";

const Layout = ({children}: { children: ReactNode }) => {
    const navigate = useNavigate();
    const isLoggedIn = StorageService.getItem('userInfo');
    const dispatch = useAppDispatch();

    const handleLogOut = () => {
        localStorage.setItem("userInfo", 'null');
        dispatch(setInfo({username: '', password: ''}));
        navigate('/');
    }

    const handleLogIn = () => {
        navigate('/login');
    }

    return (
        <>
            <Flex className={'layout'} justify={'space-between'} color={'white'} align={'center'}>
                <div className={'logo'}>
                    <img src='/Mask%20group.png' alt="logoImg"/>
                    &nbsp;&nbsp;
                    <img src={'/Movies.png'} alt="logoText"/>
                </div>
                <nav className={'nav'}>
                    <NavLink to={HOME_PATH} end>
                        Home&nbsp;
                    </NavLink>
                    <NavLink to={MOVIES_HOME_PATH} end>
                        Movies&nbsp;
                    </NavLink>
                </nav>

                {isLoggedIn && <Button onClick={handleLogOut}>Log out</Button>}
                {!isLoggedIn && <Button onClick={handleLogIn}>Log In</Button>}

            </Flex>
            {children}
        </>
    )
}

export default Layout;