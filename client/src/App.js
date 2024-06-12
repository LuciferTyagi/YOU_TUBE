import { Provider } from "react-redux";
import Body from "./Components/Body";
import Header from "./Components/Header";
import Store from "./Utils/AppStore";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./Components/MainContainer";
import WatchPage from "./Components/WatchPage";

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<Body/>,
    children:[
      {
        path:"/",
        element:<MainContainer/>
      },
      {
        path:"/watch",
        element:<WatchPage/>
      },
    ]
  },
  {

  }
])
function App() {
  return (
     <Provider store={Store}>
    <div>
    <Header/>
    <RouterProvider router={appRouter}></RouterProvider>
   </div>
   </Provider>
  );
}

export default App;
