import { useState, useRef } from "react"
import { Header } from "./Header"
import { FormValidation } from "../utils/FormValidtion";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword ,updateProfile} from "firebase/auth";

import { useDispatch} from "react-redux";
import { addUsers } from "../utils/userSlice";
import { BG_URL } from "../utils/Constant";

export const Login = () => {
    const [ToSignUp, setToSignUp] = useState(true);
    const [errorMessage, seterrorMessage] = useState(null);
    const displatch = useDispatch()
    
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);


    const handleFormClick = () => {

        const Message = FormValidation(email.current.value, password.current.value);

        seterrorMessage(Message);
        if (Message) return;
        if (!ToSignUp) {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;

                    updateProfile(user, {
                        displayName: name.current.value,
                         photoURL: "https://avatars.githubusercontent.com/u/252877083?s=400&v=4",
                    }).then(() => {
                        // Profile updated!
                        const { uid, email, displayName, photoURL } = auth.currentUser;
                                    displatch(addUsers({ uid: uid, email: email, displayName: displayName, photoURL: photoURL, }));
                        
                        
                    }).catch((error) => {
                        // An error occurred
                        // ...
                        seterrorMessage(error.message)
                    });
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    seterrorMessage(errorCode + "-" + errorMessage);
                });
        }
        else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    seterrorMessage(errorCode + "-" + errorMessage);
                });

        }

    }

    const handleTogelclick = () => {

        setToSignUp(!ToSignUp);

    }

    return (
        <div>

            <Header /> 

            <div className="absolute">
                <img src={BG_URL} alt="" />

            </div>
            <form onSubmit={(e) => { e.preventDefault() }} className="w-3/12 absolute p-12 bg-black/80 my-36 mx-auto right-0 left-0 text-white rounded-lg">
                <h1 className="font-bold text-3xl py-4 rounded-lg">{ToSignUp ? "Sign In" : "Sign Up"}</h1>
                {!ToSignUp && <input type="text" ref={name} placeholder="Name" className="p-2 my-2 w-full rounded-lg bg-gray-700" />}
                <input type="text" ref={email} placeholder="Email Address" className="p-2 my-2 w-full rounded-lg bg-gray-700" />
                <input type="text" ref={password} placeholder="password" className="p-2 my-2 w-full rounded-lg bg-gray-700" />
                <p className="text-red-500">{errorMessage}</p>
                <button className="p-4 my-4 bg-red-700 w-full rounded-lg" onClick={handleFormClick}>{ToSignUp ? "Sign In" : "Sign Up"}</button>
                <p className="py-4 cursor-pointer" onClick={handleTogelclick}>{ToSignUp ? "New to Netflix? Sign Up Now" : "Already Resistered Sign In"} </p>
            </form>
        </div>
    )
}
