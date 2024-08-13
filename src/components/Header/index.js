import "./style.css"
import { FaMapMarkerAlt } from "react-icons/fa";
import { GrGithub, GrLinkedin } from "react-icons/gr";
import { FaWhatsapp } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import foto from "../../Assets/ft_curriculo.jpeg"

const Header = ()=>{
    return(
        <div className='header'> 
        <section className='header__descricao'>
          <h1 className='header__descricao__titulo'>Pedro Aguiar</h1>
          <p className='header__descricao__texto'>Analista e desenvolvedor de sistemas</p>
          <p className='header__descricao__texto'><FaMapMarkerAlt/> Florianópolis, SC, Brasil</p>
          <p><FaWhatsapp /> (48)98826-0957</p>
          <p><CgMail/> pedrodaniel8416@gmail.com</p>
          <p>
            <a target="_blank" href="https://www.linkedin.com/in/pedro-aguiar-b23a3020b/"><GrLinkedin className="header__descricao__icon"/></a>
            <a target="_blank" href="https://github.com/PedrodAguiar"><GrGithub className="header__descricao__icon"/></a>
            </p>
          
        </section>
        <section className='header__imagem'>
          <img className="header__imagem__img" src={foto}/>
        </section>
      </div>
    )
}

export default Header