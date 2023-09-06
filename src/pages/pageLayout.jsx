import { ThemeProvider, createTheme } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline/CssBaseline'
import { styled } from '@mui/system'
import Search from './search/Search'
import { searchGenre } from "../redux/genreReducer"
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import Header from '../components/header/Header'

// eslint-disable-next-line react/prop-types
const PageLayout = ({children}) => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchGenre())
  }, [dispatch])

    const darkTheme = createTheme({
        palette: {
          mode: "dark"
        }
      })

      const Img = styled("img")({
        marginLeft: "auto",
        marginRight: "auto",
        display: "block",
        width: 500,
        maxWidth: "100%",
        background: "white"

      })

      const Wrapper = styled("div")({
        margin: 24,
        width: "auto",

      })

    return(
        <ThemeProvider theme={darkTheme}>
          <CssBaseline/>
            <Wrapper>
              <Header />
              <Img src="/hub.svg" alt='Home'/>
              <Search/>
              {children}
            </Wrapper>
        </ThemeProvider>
    )
}

export default PageLayout;