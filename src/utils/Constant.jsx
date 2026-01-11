
  export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
  }
};
 

export  const CDN_IMG_URL = "https://image.tmdb.org/t/p/w500";
export const BG_URL  = "https://assets.nflxext.com/ffe/siteui/vlv3/d13e2d55-5cdd-48c0-a55b-4b292d0b9889/web/IN-en-20251229-TRIFECTA-perspective_d7edcd70-4cfd-441c-858c-c5e400ed6c2b_large.jpg"
export const SUPPORTED_LANGUAGES = [
    {
        identifier: "en",
        name: "English"
    },
    {
        identifier: "hi",
        name: "Hindi"
    },
    {
        identifier: "ta",
        name: "Tamil"
    },
    {
        identifier: "te",
        name: "Telugu"
    },
    {
        identifier: "kn",
        name: "Kannada"
    },
    {
        identifier: "es",
        name: "Spanish"
    },
    {
        identifier: "fr",
        name: "French"
    },
    {
        identifier: "zh",
        name: "Chinese"
    },
    {
        identifier: "ja",
        name: "Japanese"
    },
    {
        identifier: "ar",
        name: "Arabic"
    }
];


