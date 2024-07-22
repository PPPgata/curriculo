import Habilidade from "../Habilidade"
import "./style.css"

const Habilidades = ()=>{
    return(
        <div className="habilidades">
            <h2>Habilidades</h2>
            <div className="habilidades__pin">
                <Habilidade habilidade = "JavaScript"/>
                <Habilidade habilidade = "Java"/>
                <Habilidade habilidade = "Python"/>
                <Habilidade habilidade = "React"/>
                <Habilidade habilidade = "Node.js"/>
                <Habilidade habilidade = "Spring Boot"/>
                <Habilidade habilidade = "MySQL"/>
                <Habilidade habilidade = "PostgreSQL"/>
            </div>
        </div>
    )
}

export default Habilidades