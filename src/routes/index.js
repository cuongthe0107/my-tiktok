import { HeaderOnly } from "../layouts";
import Flowwing from "../pages/Flowwing";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Search from "../pages/Search";
import Upload from "../pages/Upload";

export const publicRoutes = [
    {path: '/', component: Home},
    {path: '/flowwing', component: Flowwing},
    {path: '/profile', component: Profile},
    {path: '/upload', component: Upload, layout: HeaderOnly},
    {path: '/seacrh', component: Search, layout: null},

]