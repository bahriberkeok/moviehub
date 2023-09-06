/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { TextField, Paper, MenuItem, Grid, Typography } from "@mui/material"
import { useDispatch } from "react-redux"
import { searchProduct } from "../../redux/searchReducer"
import { Link } from "react-router-dom"
import Downshift from "downshift"
import { IMAGE_PATH, DEFAULT_IMAGE } from "../../config"
import { mapGenres } from "../../lib/helper"

import {styled} from "@mui/system"

const PaperStyle = styled(Paper)({
    background: "linear-gradient(to right bottom, gold, blue)",
    top: -40,
    position: "relative"
})

const MenuItemStyle = styled(MenuItem)({
    paddingTop: 5,
    paddingBottom: 5
})

const ImgStyle = styled("img")({
    height: "100%"
})

const LinkStyle = styled(Link)({
    display: "block",
    textDecoration: "none"
})

const TitleStyle = styled(Typography)({
    color: "black",
    paddingTop: 10
})

const CaptionStyle = styled(Typography)({
    color: "black"
})

const Searchbar = ({movies, genres}) => {

    const dispatchData = useDispatch()

    const inputChange = (event) => {
        if (!event.target.value) {
            return
        }
        
        dispatchData(searchProduct(event.target.value))

    }

    const itemString = () => ("")

    return(
        <Downshift itemToString={itemString}>
            {({
                getInputProps,
                getItemProps,
                getMenuProps,
                isOpen,
                inputValue,
                highlightedIndex,
                selectedItem

            }) => (
                <div>
                <TextField
                id="search"
                placeholder="Search"
                fullWidth={true}
                sx={{mb: 5}}
                InputProps={{
                    ...getInputProps({
                        onChange: inputChange
                    })
                    
                }}
            />
            {
                isOpen ? (
                <PaperStyle square ={true} {...getMenuProps()}>
                    {
                        movies.results
                        .slice(0, 10)
                        .filter((item) =>
                            !inputValue || item.title.toLowerCase().includes(inputValue.toLowerCase())
                        ).map((item, index) => (
                            <MenuItemStyle {...getItemProps({
                                item,
                                key: item.id,
                                selected: highlightedIndex === index,
                                style: {
                                    fontWeight: selectedItem === item ? 500 : 400 
                                }
                            })}>
                                <LinkStyle to={`movie/${item.id}`}>
                                    <Grid container={true} spacing={8}>
                                        <Grid item={true}>
                                            {item.poster_path ? (
                                                <ImgStyle src = {`${IMAGE_PATH}/w92${item.poster_path}`} alt = {item.title} />
                                            ): (
                                                <ImgStyle src= {DEFAULT_IMAGE} alt={item.title}/>
                                            )}
                                        </Grid>
                                        <Grid item={true}>
                                            <TitleStyle variant="h4">
                                                {item.title}
                                            </TitleStyle>
                                            <CaptionStyle variant="caption">
                                                {mapGenres(item.genre_ids, genres)}
                                            </CaptionStyle>
                                        </Grid>
                                    </Grid>
                                </LinkStyle>
                            </MenuItemStyle>
                        ))
                    }
                </PaperStyle>) 
                : null
            }
                </div>

                
            )}
            
        </Downshift>
    )
}

export default Searchbar;