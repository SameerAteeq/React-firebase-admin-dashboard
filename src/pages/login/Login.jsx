import { useContext, useState } from "react";
import "./login.scss";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
const Login = () => {
    const { dispatch } = useContext(AuthContext);
    const [error, setError] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(false);
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                navigate("/")
                dispatch({ type: "LOGIN", payload: user })
            })
            .catch((error) => {
                setError(true)
            });
    }
    return (
        <div className='login'>
            <h1>Login Page</h1>
            <form onSubmit={handleLogin}>
                <input type="email" placeholder='Enter Your Email...' onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder='Enter Your Password...' onChange={(e) => setPassword(e.target.value)} />
                <button type='submit'>Login</button>
                {error && <span>Wrong email and password !</span>}
            </form>
        </div>
    )
}

export default Login