import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./assets/pages/Inicio";
import Login from "./assets/pages/Login";
import Registro from "./assets/pages/Registro";
import RegistroLocalizacaoFuncionario from "./assets/pages/Funcionario/RegistroCompleto/Localizacao"
import RegistroInformacoesFuncionario from "./assets/pages/Funcionario/RegistroCompleto/InfoPessoal"
import RegistroCompletoFuncionario from "./assets/pages/Funcionario/RegistroCompleto/Completo"
import RegistroLocalizacaoEmpregador from "./assets/pages/Empresa/RegistroCompleto/Empregador/LocalizacaoEmpregador";
import RegistroInformacoesEmpregador from "./assets/pages/Empresa/RegistroCompleto/Empregador/InfoPessoalEmpregador";
import RegistroCompletoEmpregador from "./assets/pages/Empresa/RegistroCompleto/Empregador/CompletoEmpregador";
import RegistroDadosEmpresa from "../src/assets/pages/Empresa/RegistroCompleto/Empresa/Dados"
import RegistroLocalizacaoEmpresa from "../src/assets/pages/Empresa/RegistroCompleto/Empresa/LocalizacaoEmpresa"
import RegistroInformacaoEmpresa from "../src/assets/pages/Empresa/RegistroCompleto/Empresa/InfoEmpresa"
import RegistroDescricaoEmpresa from "../src/assets/pages/Empresa/RegistroCompleto/Empresa/Descricao"
import Home from "./assets/pages/Home";
import Buscar from "./assets/pages/Buscar";
import Bug from "./assets/pages/Bug";
import Perfil from "./assets/pages/Perfil";
import AdicionarVaga from "./assets/pages/AdicionarVaga";
import Pagina404 from "./assets/pages/notFoundPage"

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Inicio /> }></Route>
                <Route path="/login" element={ <Login /> }></Route>
                <Route path="/registro" element={ <Registro /> }></Route>
                <Route path="/registro/funcionario/localizacao" element={ <RegistroLocalizacaoFuncionario /> }></Route>
                <Route path="/registro/funcionario/info" element={ <RegistroInformacoesFuncionario /> }></Route>
                <Route path="/registro/funcionario/completo" element={ <RegistroCompletoFuncionario /> }></Route>
                <Route path="/registro/empregador/localizacao" element={ <RegistroLocalizacaoEmpregador /> }></Route>
                <Route path="/registro/empregador/info" element={ <RegistroInformacoesEmpregador /> }></Route>
                <Route path="/registro/empregador/completo" element={ <RegistroCompletoEmpregador /> }></Route>
                <Route path="/registro/empresa/dados" element={ <RegistroDadosEmpresa /> }></Route>
                <Route path="/registro/empresa/localizacao" element={ <RegistroLocalizacaoEmpresa /> }></Route>
                <Route path="/registro/empresa/info" element={ <RegistroInformacaoEmpresa /> }></Route>
                <Route path="/registro/empresa/descricao" element={ <RegistroDescricaoEmpresa /> }></Route>
                <Route path="/home" element={ <Home /> }></Route>
                <Route path="/home/busca" element={ <Buscar /> }></Route>
                <Route path="/home/bug" element={ <Bug /> }></Route>
                <Route path="/home/perfil" element={ <Perfil /> }></Route>
                <Route path="/home/adicionarVaga" element={ <AdicionarVaga /> }></Route>
                <Route path="*" element={ <Pagina404 /> }></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;