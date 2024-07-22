import "./style.css"

const CardFormacao = ({titulo, curso, ano})=>{
    return(
        <div className="cardformacao">
            <div className="cardformacao__informacoes">
                <h3>{titulo}</h3>
                <p>{curso}</p>
            </div>
            <div className="cardformacao__ano">
                <p>{ano}</p>
            </div>
        </div>
    )
}

export default CardFormacao