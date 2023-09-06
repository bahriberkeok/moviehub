export default class ProductDatabase {
    url = "https://api.themoviedb.org/3"
    key

    constructor(key) {
        this.key = key    
    }

    movieDatabase = async (query) => {
        const response = await fetch(
            `${this.url}/search/movie?api_key=${this.key}&query=${query}`)

        return response.json()
    } 

    getGenre = async () => {
        const response = await fetch(
            `${this.url}/genre/movie/list?api_key=${this.key}` )

        return response.json()
    } 

    getMovies = async (page = 1) => {
        const response = await fetch(
            `${this.url}/movie/popular?api_key=${this.key}&page=${page}`)

        return response.json()
    }

    getDetail = async (id) => {
        const response = await fetch(
            `${this.url}/movie/${id}?api_key=${this.key}&append_to_response=recommendations`)

        return response.json()
    }

}