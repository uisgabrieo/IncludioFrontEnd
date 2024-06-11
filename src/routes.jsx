import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./assets/pages/Inicio";
import Login from "./assets/pages/Login";
import Registro from "./assets/pages/Registro";
import RegistroCompletoFuncionario from "./assets/pages/Funcionario"
import RegistroCompletoEmpresa from "./assets/pages/Empresa/RegistroCompleto";
import Home from "./assets/pages/Home";
import Buscar from "./assets/pages/Buscar";
import Bug from "./assets/pages/Bug";
import Perfil from "./assets/pages/Perfil";
import AdicionarVaga from "./assets/pages/AdicionarVaga";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Inicio /> }></Route>
                <Route path="/login" element={ <Login /> }></Route>
                <Route path="/registro" element={ <Registro /> }></Route>
                <Route path="/registro/funcionario/registroCompleto" element={ <RegistroCompletoFuncionario /> }></Route>
                <Route path="/registro/empresa/registroCompleto" element={ <RegistroCompletoEmpresa /> }></Route>
                <Route path="/home" element={ <Home /> }></Route>
                <Route path="/home/busca" element={ <Buscar /> }></Route>
                <Route path="/home/bug" element={ <Bug /> }></Route>
                <Route path="/home/perfil" element={ <Perfil /> }></Route>
                <Route path="/home/adicionarVaga" element={ <AdicionarVaga /> }></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;