import { Routing } from "pages";
import { withProviders } from "./providers";
import './styles/index.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <div className="app">
      <Routing />
    </div>
  );
}

export default withProviders(App);
