import { MainRouter } from "./router";
import { BasketProvider } from "./context/BasketContext";
import CounterApp from "./CounterApp";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <MainRouter />
    </Provider>
  );
}

export default App;
