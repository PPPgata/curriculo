import "./style.css"

const CardProjetos = ({nomeProjeto, descricao, habilidades,link})=>{
    return(
        <div className="cardprojetos">
            <h3><a className="cardprojetos__titulo" href={link}>{nomeProjeto}</a></h3>
            <p>{descricao}</p>
            <ul className="tags__habilidades">
            {habilidades.map((habilidade)=>(
                <li className="tag__habilidade" key={habilidade}>{habilidade}</li>
            ))}
            </ul>
        </div>
    )
}

export default CardProjetos