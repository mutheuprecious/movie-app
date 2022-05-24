import Treading from "../../pages/TreadingShows/Treading";
import Home from "../../pages/Home/Home";
import Movies from "../../pages/Movies/Movies";
import TvSeries from "../../pages/TvSeries/TvSeries";
import { Redirect, Router, Switch } from "react-router-dom";
import SinglePage from "../../components/SingleContentPage/SinglePage";
import MainNav from "../../components/MainNavbar/MainNav";
import Footer from "../../components/Footer/Footer";
import CopyWrite from "../../components/CopyWrite__footer/LastFooter";
import BottomNav from "../../components/MainNavbar/BottomNav";

const Router = () => {
  return (
    <>
      <MainNav />

      <div className="App">
        <Switch>
          <Router exact path="/" component={Home} />
          <Router path="/all-movies" component={Movies} />
          <Router path="/treading" component={Treading} />
          <Router path="/all-series" component={TvSeries} />
          <Router path="/:media-:id-category/" children={<Movies />} />
          <Router path="/movies/:id" children={<Movies />} />
          <Router path="/series/:id" children={<TvSeries />} />
          <Router path="/:mediaType/:id" children={<SinglePage />} />
          <Router path="/movies/page/:page" children={Movies} />
          <Router path="/series/page/:page" children={TvSeries} />
          <Router path="/treading/page/:page" children={Treading} />
          <Router path="/movies/:id/page/:page" children={Movies} />
          <Router path="/movies/:searhTerm/page/:page" children={Movies} />
          <Router path="/:media=series:id2-category/" children={<TvSeries />} />
          <Router path="/series/:searhTerm/page/:page" children={TvSeries} />
          <Redirect to="/error" />
        </Switch>
      </div>
      <Footer />
      <BottomNav />
      <CopyWrite />
    </>
  );
};

export default Router;

