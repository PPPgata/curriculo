import "./style.css"
import CardProjetos from '../CardProjetos';
import { projetos } from "../../data/projetos";

const Projetos = ()=>{
    return(
        <div>
            <h2>Projetos</h2>
            {projetos.map((projeto)=>(
                <CardProjetos
                descricao={projeto.descricao}
                habilidades={projeto.habilidade}
                link={projeto.link}
                nomeProjeto={projeto.nomeProjeto}
                />
            ))}
            
        </div>
    )
}

export default Projetos