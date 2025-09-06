import { useState } from 'react';
import { SIGNUP_ENDPOINT } from '../constants/serverApi';
import { useAuthContext } from './useAuthContext';
export const useSignup = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const { dispatch } = useAuthContext();
    const signup = async (email, password, phoneNumber, companyName) => {
        setIsLoading(true);
        setError(null);
        setSuccess(false);

        const response = await fetch(SIGNUP_ENDPOINT, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password, phoneNumber, companyName })
        });
        const json = await response.json();

        if (!response.ok) {
            setIsLoading(false);
            setError(json.error);
            setSuccess(false);
        }
        if (response.ok) {
            localStorage.setItem('user', JSON.stringify(json));
            dispatch({ type: 'LOGIN', payload: json });
            setIsLoading(false);
            setError(null);
            setSuccess(true);
        }
    }
    return { signup, isLoading, error, success };
}   