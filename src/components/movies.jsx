import React, { Component } from "react";
import {
    getMovies,
    deleteMovie,
    saveMovie
} from "../services/fakeMovieService";
import MoviesTable from "./moviesTable";
import Pagination from "./common/pagination";
import NavList from "./common/navList";
import { getGenres } from "../services/fakeGenreService";

class Movies extends Component {
    state = {
        movies: [],
        genres: [],
        itemsPerPage: 4,
        currentPage: 1,
        selectedGenre: { _id: 0, name: "All" }
    };
    componentDidMount() {
        this.setState({
            movies: getMovies(),
            genres: [{ _id: 0, name: "All" }, ...getGenres()]
        });
    }
    handleDelete = e => {
        deleteMovie(e._id);
        this.setState({ movies: getMovies() });
    };
    handleLike = movie => {
        movie.liked = !movie.liked;
        saveMovie(movie);
        this.setState({ movies: getMovies() });
    };
    handlePageChange = page => {
        this.setState({ currentPage: page });
    };
    handleFilter = genre => {
        this.setState({ selectedGenre: genre });
    };
    getFilteredMovies = () => {
        let movies = getMovies();
        const { selectedGenre } = this.state;
        if (selectedGenre.name !== "All")
            movies = movies.filter(m => m.genre._id === selectedGenre._id);
        return movies;
    };
    render() {
        const movies = this.getFilteredMovies();
        const { length: count } = movies;
        if (!count) return <p>No movies found..</p>;
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-3">
                        <NavList
                            onClick={this.handleFilter}
                            items={this.state.genres}
                            selectedGenre={this.state.selectedGenre}
                        />
                    </div>
                    <div className="col">
                        <div className="alert alert-light">
                            Showing {count} of {this.state.movies.length}{" "}
                            movies.
                        </div>
                        <MoviesTable
                            onLike={this.handleLike}
                            onDelete={this.handleDelete}
                            movies={movies}
                        />
                        <Pagination
                            itemsCount={count}
                            currentPage={this.state.currentPage}
                            itemsPerPage={this.state.itemsPerPage}
                            onPageChange={this.handlePageChange}
                        />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Movies;
