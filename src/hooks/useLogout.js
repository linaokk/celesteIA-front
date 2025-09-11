
import { LOGIN_ROUTE } from '../constants/routes';
import { useAuthContext } from './useAuthContext';
import { useNavigate } from 'react-router-dom';
export const useLogout = () => {
    const {dispatch} = useAuthContext();
    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem('user');
        dispatch({type: 'LOGOUT'});
        navigate(LOGIN_ROUTE);
    }
    return {logout};
}