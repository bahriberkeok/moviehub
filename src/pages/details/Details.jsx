/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react"
import { searchDetail, resetDetail } from "../../redux/detailReducer"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { Grid, Typography } from "@mui/material"
import { styled } from "@mui/system"
import { IMAGE_PATH, DEFAULT_IMAGE } from "../../config"
import Popular from "../../components/popularmovies/Popular"


const GridStyle = styled(Grid)(({theme}) => ({
    marginBottom: theme.spacing(3)
}))

const ImgStyle = styled("img")(() => ({
    width: "100%"
}))



const Details = () => {

    const dispatch = useDispatch()

    const { id } = useParams()
    const { details } = useSelector((store) => store)
    const { genres } = useSelector((store) => store.genres)

    useEffect(() => {
        dispatch(searchDetail(id ? parseInt(id, 10) : 0))

        return () => {
            dispatch(resetDetail())
        }
    }, [dispatch])

    useEffect(() => {
        if (id !== details.id?.toString()) {
            dispatch(searchDetail(id ? parseInt(id, 10) : 0))

        }
    }, [id, details.id?.toString()])

    const formatRuntime = (runtime) => {
        const hours = Math.floor(runtime / 60) + "h"
        const minutes = (runtime % 60) + "m"

        return `${hours} ${minutes}`
    }

    return (
        <>
            <GridStyle container={true} spacing={2}>
                <Grid item={true} md={3}>
                    {
                        details.poster_path ? 
                        <ImgStyle  src={`${IMAGE_PATH}/w300${details.poster_path}`} alt={details.title}/> : <ImgStyle src={DEFAULT_IMAGE} alt={details.title} />
                    }
                </Grid>
                <Grid item={true} md={9}>
                    <Typography component={"h1"} variant={"h3"} gutterBottom={true}>
                        {details.title}
                    </Typography>
                    {
                        details.tagline && (
                            <>
                                <Typography component={"h3"} variant={"h6"}>
                                    Tagline:
                                </Typography>
                                <Typography variant={"body1"} gutterBottom={true}>
                                    {details.tagline}
                                </Typography>
                            </>
                        )
                    }
                    {
                        details.genres && (
                            <>
                                <Typography component={"h3"} variant={"h6"}>
                                    Genre:
                                </Typography>
                                <Typography variant={"body1"} gutterBottom={true}>
                                    {details.genres.map((genres) => genres.name).join(", ")}
                                </Typography>
                            </>
                        )
                    }
                    {
                        details.production_countries && (
                            <>
                                <Typography component={"h3"} variant={"h6"}>
                                    Country:
                                </Typography>
                                <Typography variant={"body1"} gutterBottom={true}>
                                    {details.production_countries.map((country) => country.name).join(", ")}
                                </Typography>
                            </>
                        )
                    }
                    {
                        details.runtime && (
                            <>
                                <Typography component={"h3"} variant={"h6"}>
                                    Duration:
                                </Typography>
                                <Typography variant={"body1"} gutterBottom={true}>
                                    {formatRuntime(details.runtime)}
                                </Typography>
                            </>
                        )
                    }
                    {
                        details.release_date && (
                            <>
                                <Typography component={"h3"} variant={"h6"}>
                                    Release Date:
                                </Typography>
                                <Typography variant={"body1"} gutterBottom={true}>
                                    {new Date(details.release_date).toLocaleDateString("en-UK", { year:"numeric", month: "long", day: "numeric"})}
                                </Typography>
                            </>
                        )
                    }
                    {
                        details.overview && (
                            <>
                                <Typography component={"h3"} variant={"h6"}>
                                    Overview:
                                </Typography>
                                <Typography variant={"body1"} gutterBottom={true}>
                                    {details.overview}
                                </Typography>
                            </>
                        )
                    }
                </Grid>
            </GridStyle>

            {
                details.recommendations && (
                    <>
                        <Typography component={"h2"} variant={"h4"} gutterBottom={true}>
                            Recommended
                        </Typography>
                        <Popular movies={details.recommendations} genres={genres} />
                    </>
                )
            }
        </>
    )
}

export default Details;