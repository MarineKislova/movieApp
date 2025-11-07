import { Component } from "react";
import { TrendingService } from "../../services/TMDBService";
import MovieCard from "../movieCard/movieCard";

class AllTrending extends Component {
  state = {
    items: [],
    genres: [],
    loading: true,
  };

  tmdbTrandingService = new TrendingService();

  componentDidMount() {
    this.tmdbTrandingService.getAllTrending().then((data) => {
      this.setState({
        items: data.results || [],
        loading: false,
      });
      console.log(data);
    });
  }

  render() {
    const { items, loading } = this.state;

    if (loading) return <p>Загрузка...</p>;

    return (
      <div className="trending__cards" id="allTrending">
        {items.map((item) => (
          <MovieCard key={item.id} data={item} />
        ))}
      </div>
    );
  }
}

export default AllTrending;
