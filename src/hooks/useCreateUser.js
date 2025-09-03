import { useState } from 'react';
export const useSignup = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const signup = async (email, password, phoneNumber, companyName) => {
        setIsLoading(true);
        setError(null);

        const response = await fetch('http://localhost:4000/api/users/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password, phoneNumber, companyName })
        });
        const json = await response.json();

        if (!response.ok) {
            setIsLoading(false);
            setError(json.error);
        }
        if (response.ok) {
            // Inscription réussie
            setIsLoading(false);
            setError(null);
        }
    }
}   