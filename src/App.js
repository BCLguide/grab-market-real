import "./App.css";
import { Switch, Route } from "react-router-dom";
import MainPage from "./main";
import ProductPage from "./product";
import UploadPage from "./upload";

function App() {
  return (
    <div>
      <Switch>
        <Route exact={true} path="/">
          <MainPage />;
        </Route>
        <Route exact={true} path="/products/:id">
          <ProductPage />
        </Route>
        <Route exact={true} path="/upload">
          <UploadPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
