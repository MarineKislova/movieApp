import { Component } from "react";
import { GenresService } from "../../services/TMDBService";

class Genres extends Component {
    state = {
        genres: [],
        loading: true,
    };
    tmdbGenresService = new GenresService();
    componentDidMount() {
        this.tmdbGenresService.getGenres()
            .then(data => {
                this.setState({ genres: data.genres, loading: false });
            })
           .catch(error => console.error(error));
           console.log(this.state.genres);
    }
    render() {
        const { genres, loading } = this.state;
        if (loading) return <p>Loading...</p>;
        return (
            <div>
                {genres.map(genre => (
                    <p key={genre.id}>{genre.name}</p>
                ))}
            </div>
        );
    }
}

export default Genres;
