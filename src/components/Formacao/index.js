import CardFormacao from "../CardFormacao"
import "./style.css"

const Formacao = ()=>{
    return(
        <div className="formacao">
            <h2>Formaçao</h2>
                <CardFormacao
                titulo = {"UniSenai CTAI"}
                curso = {"Análise e Desenvolvimento de Sistemas"}
                ano = {"2023 - 2025"}
                />
                <CardFormacao
                titulo = {"SENAI CTAI"}
                curso = {"Técnico em Desenvolvimento de Sistemas"}
                ano = {"2020 - 2022"}
                />
      </div>
    )
}

export default Formacao