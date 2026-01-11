import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { data, useNavigate } from "react-router-dom";
import { addUsers, removeUser } from "../utils/userSlice"
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/Constant";
import { changeLanguage } from "../utils/configSlice";


export const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);
    const show = useSelector((store) => store.gpt.showGptSearch)

    const handleSignOut = () => {

        signOut(auth).then(() => {
            // Sign-out successful.

        }).catch((error) => {
            // An error happened.

        });

    }

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {

                const { uid, email, displayName, photoURL } = user;
                dispatch(addUsers({ uid: uid, email: email, displayName: displayName, photoURL: photoURL, }));
                // ...
                navigate("/browse");
            } else {
                // User is signed out
                // ...
                dispatch(removeUser());
                navigate("/");
            }
        });

        return () => unsubscribe();

    }, [])

    const handleGptSearchClick = () => {

        dispatch(toggleGptSearchView());

    }
    const handleLanguageChange = (e) => {
        dispatch(changeLanguage(e.target.value))
    }

    return (


        <div>
            <div className="fixed top-0 left-0 w-full px-10 py-4 
    bg-linear-to-b from-black via-black/70 to-transparent 
    z-50 flex items-center justify-between">

                <img
                    src="https://images.icon-icons.com/2699/PNG/512/netflix_logo_icon_170919.png"
                    alt="Netflix"
                    className="h-20 max-w-27.5 object-contain"
                />

                {user && (
                    <div className="flex items-center gap-4">
                        {show && <select className="p-2 bg-gray-900 text-white m-2" onChange={handleLanguageChange}>
                            {SUPPORTED_LANGUAGES.map(lan => <option key={lan.identifier} value={lan.identifier}>{lan.name}</option>)}
                        </select>}
                        <button className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg" onClick={handleGptSearchClick}
                        >{show?"HomePage":"GPT Search"}</button>
                        {/* User Avatar */}
                        <img
                            src={user?.photoURL}
                            alt="User"
                            className="w-9 h-9 rounded-full object-cover border border-white/20"
                        />

                        {/* Sign Out */}
                        <button
                            onClick={handleSignOut}
                            className="text-white text-sm font-medium 
    hover:text-red-500 transition duration-200"
                        >
                            Sign Out
                        </button>

                    </div>

                )}
            </div>

        </div>
    );
};
