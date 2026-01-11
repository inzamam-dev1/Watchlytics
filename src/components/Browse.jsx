
import { Header } from './Header'
import { useNowPlayingMovies } from '../Hooks/useNowPlayingMovies'
import { MainContainer } from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import { usePapularMovies } from '../Hooks/usePapularMovies';
import { useTopRatedMovies } from '../Hooks/useTopRatedMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';
export const Browse = () => {

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch)
  useNowPlayingMovies();
  usePapularMovies();
  useTopRatedMovies();
  return (
    <div>

      <Header />
      {showGptSearch ? <GptSearch /> : <>   <MainContainer />
        <SecondaryContainer /></>}


    </div>


  )
}
