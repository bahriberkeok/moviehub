import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchMovie } from "../../redux/movieReducer";
import Popular from "../../components/popularmovies/Popular";
import { CircularProgress, Typography } from "@mui/material"
import { styled } from "@mui/system"
import InfiniteScroll from "react-infinite-scroll-component"

const Wrap = styled("div")(({theme}) => ({
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(3)
}))


const Trending = () => {

    const dispatch = useDispatch()
    
    const { movies } = useSelector ((store) => store)
    const { genres } = useSelector ((store) => store.genres)

    useEffect(() => {
        dispatch(searchMovie()) 

        /* return () => {
            dispatch(resetMovie())
        } */
    }, [dispatch])

    const load = () => {
        if (movies.hasMore) {
            dispatch(searchMovie(movies.page + 1 ))
            
        }
    }

    return (movies.page === 0  && movies.isFetching ? (
    <Wrap>
        <CircularProgress />
    </Wrap>)
    : <>
        <Typography component={"h2"} variant={"h3"} gutterBottom={true}>
            Popular Movies
        </Typography>
        <InfiniteScroll dataLength={movies.totalresults} next={load} hasMore={movies.hasMore} loader={<Wrap><CircularProgress /></Wrap>} style={{overflow: "hidden"}}>
            <Popular  movies={movies} genres={genres}/>
        </InfiniteScroll> 
    </>
    )
}

export default Trending;