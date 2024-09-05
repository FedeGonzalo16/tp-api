import Cards from "../model/Cards";
import FormSingUp from "../forms/FormSignUp";
import FormSignIn from "../forms/FormSignIn";
import StepsTo from "../extras/Step";
import NavbarPage from "../partials/Navbar";
import BtnLanding from "../model/BtnLanding";
import DeleteUserBtn from "../user/DeleteUserBtn";
import ModifyUserBtn from "../user/ModifyUserBtn";
import InputTicket from "../tickets/InputTicket";

function Landing(){
    return(
        <div>
            <div className="relative justify-start">
            <NavbarPage></NavbarPage>
            <FormSingUp></FormSingUp>
            <FormSignIn></FormSignIn>
            <DeleteUserBtn></DeleteUserBtn>
            <ModifyUserBtn></ModifyUserBtn>
            <InputTicket></InputTicket>
                <p>Bienvenido a Easy Pays</p>
                <h1>Gestionar tus Gastos Nunca fue tan fácil</h1>
                <p>Te brindamos soluciones para que puedas calcular tus gastos, analizarlos
                y compartilos con demás personas con las que necesites dividir los mismos</p>
            <BtnLanding></BtnLanding>
            </div>
            <div className="mg-10">
                <div className="bg-blue">
                    {/* img */}
                </div>
                <div>
                    <p>¿Quiénes somos?</p>
                    <h2>Sobre Nosotros</h2>
                    <p>Somos una empresa creada en 2024, que tiene el objetivo
                    de permitirte hacer un seguimiento sencillo de todos tus gastos.</p>
                    <p>Dejanos a nosotros los cálculos de tus compras, ahorrándote tiempo indispensable</p>
                    <ul>
                    <li>Sencillez</li>
                    <li>Rapidez</li>
                    <li>Comodidad</li>
                    <li>Amigable a tu vista</li>
                    <li>Cálculos en instantes</li>
                    <li>Ahorro de tiempo</li>
                    </ul>
                </div>
                <div>
                <p>¿Qué ofrecemos?</p>
                <h2>Nustros servicios</h2>
                <StepsTo></StepsTo>
                </div>
                <div>
                    {/* Testimonials */}
                </div>
                <div>
                    <h2>Cambiemos ahora tu manera de gestionar tus gastos</h2>
                </div>
            </div>
        </div>
    )
}

export default Landing;