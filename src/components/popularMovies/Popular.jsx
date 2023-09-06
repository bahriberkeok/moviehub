/* eslint-disable react/prop-types */
import { ImageList, ImageListItem, ImageListItemBar, useMediaQuery } from "@mui/material"
import { Link } from "react-router-dom"
import { IMAGE_PATH } from "../../config"
import { mapGenres } from "../../lib/helper"
import {styled} from "@mui/system"
import { useTheme}  from "@mui/material"

const ImgStyle = styled("img")({
    width: "100%",
    height: "100%",
    objectFit: "cover"
})

const ListStyle = styled(ImageListItem)({
    overflow: "hidden"
})

const Popular = ({movies, genres}) => {
    

    const theme = useTheme()

    const match = useMediaQuery(theme.breakpoints.down("sm"))

    return (
        <ImageList cols={ match ? 1: 5} rowHeight={365} gap={12}>
            {
                movies.results.map((movie) => (
                    <ListStyle key={movie.id}>
                        <Link to={`/movie/${movie.id}`}>
                            {
                                movie.poster_path && (
                                    <ImgStyle src={`${IMAGE_PATH}/w300${movie.poster_path}`} alt={movie.title}/>
                                )
                            }
                            <ImageListItemBar title={movie.title} subtitle={<span>{mapGenres(movie.genre_ids, genres)}</span>}/>
                        </Link>
                    </ListStyle>
                ))
            }
        </ImageList>
    )
}

export default Popular;