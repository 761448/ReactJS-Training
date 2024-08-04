import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, BrowserRouter, MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App";
import AppComponent from "./appComponent.js";
import SimpleForm from "./day3/simpleForm";
import DataList from "./day3/dataList";
import Theme from "./day3/theme";
import UseReducer from "./day4/useReducer";
import UseRefs from "./day4/useReference";
import UseMemo from "./day4/useMemo";
import Callback from "./day4/useCallback";
import CallUseFetch from "./day4/callUseFetch";
import UnControlled from "./day4/unControlled";
import Assigment4 from "./day4/assignment";
import AddDataInArray from "./addDataInArray";
import InsertDataInArray from "./insertDataInArray";
import SortArray from "./sortArray";
import BucketList from "./updateList";
import DeleteInArray from "./deleteInArray";
import PackingList from "./day5/conditionalRendering";
import Game from "./selfLearning/tictactoe";
import Accordion from "./selfLearning/accordion";
import TaskApp from "./selfLearning/reducerContext/app";
import NavBar from "./navbar";
import BasicExample from "./card";
import TicTacToeTutorial from "./selfLearning/tictactoeTutorial";
import RouteDemo from "./day7/route";
import counterReducer from "./day8/reducers/reducers";
import Counter from "./day8/component/counter";
import store from "./day8/store/store";
import Users from "./day7/component/users";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    {/* <BrowserRouter>
      <RouteDemo />
    </BrowserRouter> */}
    <BrowserRouter>
      <AppComponent />
    </BrowserRouter>
    {/* <Provider store={store}>
      <Counter />
    </Provider> */}
  </StrictMode>
);
