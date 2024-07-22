import "./style.css"
import { FaMapMarkerAlt } from "react-icons/fa";
import { GrGithub, GrLinkedin } from "react-icons/gr";
import foto from "../../Assets/ft_curriculo.jpg"

const Header = ()=>{
    return(
        <div className='header'> 
        <section className='header__descricao'>
          <h1 className='header__descricao__titulo'>Pedro Aguiar</h1>
          <p className='header__descricao__texto'>Analista e desenvolvedor de sistemas</p>
          <p className='header__descricao__texto'><FaMapMarkerAlt/>Florianópolis, SC, Brasil</p>
          <p>
            <a href="https://www.linkedin.com/in/pedro-aguiar-b23a3020b/"><GrLinkedin className="header__descricao__icon"/></a>
            <a href="https://github.com/PedrodAguiar"><GrGithub className="header__descricao__icon"/></a>
            </p>
          
        </section>
        <section className='header__imagem'>
          <img className="header__imagem__img" src={foto}/>
        </section>
      </div>
    )
}

export default Header