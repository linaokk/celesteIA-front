import {useState} from 'react';
import {useAuthContext} from '../context/AuthContext';
export const useLogin = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const {dispatch} = useAuthContext();
    const login = async (email, password) => {
            setIsLoading(true);
            setError(null);
            const response = await fetch('http://localhost:4000/api/users/login', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({email, password})
            });
            const json = await response.json();
 if(!response.ok){
                setIsLoading(false);
                setError(json.error);
            }
    if(response.ok){
                // Sauvegarder l'utilisateur dans le local storage
                localStorage.setItem('user', JSON.stringify(json));
                // Mettre à jour le contexte global
                dispatch({type: 'LOGIN', payload: json});
                setIsLoading(false);
            }
    }
       return {login, isLoading, error};
}
