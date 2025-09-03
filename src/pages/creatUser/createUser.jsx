import { useState } from "react";

const CreateUser = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);
        setSuccess(false);

        const user = { email, password, phoneNumber, companyName };

        try {
            const response = await fetch('http://localhost:4000/api/users/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });

            const json = await response.json();

            if (!response.ok) {
                setError(json.error);
                setSuccess(false);
            } else {
                setEmail('');
                setPassword('');
                setPhoneNumber('');
                setCompanyName('');
                setSuccess(true);
                setError(null);
            }
        } catch (err) {
            setError('La connexion au serveur a échoué. Veuillez réessayer plus tard.');
            setSuccess(false);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form className="create-user" onSubmit={handleSubmit}>
            <h2>Créer un nouvel utilisateur</h2>

            <label>Adresse e-mail :</label>
            <input 
                type="email" 
                onChange={(e) => setEmail(e.target.value)} 
                value={email}
                required
            />

            <label>Mot de passe :</label>
            <input 
                type="password" 
                onChange={(e) => setPassword(e.target.value)} 
                value={password}
                required
            />

            <label>Numéro de téléphone :</label>
            <input 
                type="text" 
                onChange={(e) => setPhoneNumber(e.target.value)} 
                value={phoneNumber}
                required
            />

            <label>Nom de l'entreprise :</label>
            <input 
                type="text" 
                onChange={(e) => setCompanyName(e.target.value)} 
                value={companyName}
                required
            />

            <button disabled={isLoading}>
                {isLoading ? 'Création en cours...' : 'Créer un utilisateur'}
            </button>

            {error && <div className="error">{error}</div>}
            {success && <div className="success">Utilisateur créé avec succès !</div>}
        </form>
    );
};

export default CreateUser;