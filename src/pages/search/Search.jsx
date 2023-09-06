import { useSelector } from "react-redux";
import Searchbar from "../../components/searchbar/Searchbar";


const Search = () =>{
   
   const { search }  = useSelector((store) => store)
   const { genres }  = useSelector((store) => store.genres)
    return (
        <Searchbar movies = {search} genres = { genres } />
    )
}

export default Search;