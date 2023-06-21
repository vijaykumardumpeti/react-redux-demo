import UserDetails from "./components/userDetails";

import { Provider } from "react-redux";
import store from "./redux/store";

import "./App.css";

const App = () => (
  <Provider store={store}>
    <div className="App">
      <UserDetails />
    </div>
  </Provider>
);

export default App;
