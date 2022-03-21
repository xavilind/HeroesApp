import { Routes, Route, BrowserRouter } from "react-router-dom";
//import { DcScreen } from '../components/dc/DcScreen';
import { LoginScreen } from '../components/login/LoginScreen';
//import { MarvelScreen } from '../components/marvel/MarvelScreen';
//import { SerchScreen } from '../components/search/SearchScreen';

//import {Navbar} from '../components/ui/Navbar';

import { DashboardRutes } from "./DashboardRutes";

export const AppRouter = () => {
  return (
    <BrowserRouter>
       
        <Routes>
            
            <Route path="login" element={<LoginScreen/>} />
            <Route path="/*" element={<DashboardRutes/>} />
        </Routes>    
    </BrowserRouter>
  )
}