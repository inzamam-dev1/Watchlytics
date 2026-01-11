import React from 'react'
import { BG_URL } from '../utils/Constant'
import GptSearchBar from './GptSearchBar'
import { GptMovieSuggestion } from './GptMovieSuggestion'


const GptSearch = () => {
    return (
        (

            <div>
                <div className='absolute -z-10'>
                    <img src={BG_URL} alt="logo" />
                </div>

                <GptSearchBar />
                <GptMovieSuggestion />

            </div>


        )
    )
}

export default GptSearch;
