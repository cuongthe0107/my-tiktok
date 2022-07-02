import { BrowserRouter, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes";
import {DefaultLayout} from './layouts';
import { Fragment } from "react";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
         {
          publicRoutes.map(function(router, index){
            const Page = router.component
            let Layout = DefaultLayout
            if(router.layout === null ){
              Layout = Fragment
            } else if(router.layout){
              Layout = router.layout
            }

            return <Route key={index} path={router.path} element={<Layout> <Page/> </Layout>} />
          })
         }
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
