
import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import lan from '../utils/languageConstants'
import { GptMovieSuggestion } from './GptMovieSuggestion';


const GptSearchBar = () => {

    const [movies, setMovies] = useState([]);

    const langKey = useSelector((store) => store.config.lang)
    const SearchText = useRef(null);
    const handleGptSearchClick = async () => {
        const query = SearchText.current.value;

        console.log("Search text:", query); // ✅ should be string

        if (!query.trim()) return;

        try {
            const response = await fetch("http://localhost:5000/search", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    query: query   // ✅ STRING ONLY
                }),
            });

            const data = await response.json();
            console.log("Backend Response:", data); // 👈 CHECK HERE

            setMovies(data);

        } catch (error) {
            console.error("Error fetching movies", error);
        }
    };



    return (
        <div className="flex flex-col items-center min-h-screen pt-20">

            {/* Search Bar */}
            <form
                onSubmit={(e) => e.preventDefault()}
                className="w-full max-w-3xl bg-black/70 backdrop-blur-md 
               grid grid-cols-12 rounded-xl shadow-2xl border border-gray-700"
            >
                <input
                    ref={SearchText}
                    type="text"
                    placeholder={lan[langKey].gptSearchPlaceHolder}
                    className="col-span-9 px-6 py-4 text-white text-lg 
                 bg-transparent outline-none 
                 placeholder-gray-400 rounded-l-xl"
                />

                <button
                    onClick={handleGptSearchClick}
                    className="col-span-3 bg-red-600 hover:bg-red-700 
                 text-white font-semibold text-lg 
                 rounded-r-xl transition duration-300"
                >
                    {lan[langKey].search}
                </button>
            </form>

            {/* Results BELOW search bar */}
            <div className="w-full mt-10">
                <GptMovieSuggestion movies={movies} />
            </div>

        </div>

    )
}

export default GptSearchBar