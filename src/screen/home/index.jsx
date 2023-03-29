import Header from "../../components/Header/index";
import Home from "../../assets/images/world.png";
import "../../styles/pages/home.sass";
import { Link } from "react-router-dom";

export default function HomeScreen() {
  return (
    <>
      <Header />
      <section class="section are-medium " className="home">
        <container class="container">
          <div class="columns">
            <div class="column is-5  ">
              <h1 spaced class="title is-2 has-text-white" >
              Maximo Evernote 
              </h1>
              <h2 spaced class="subtitle is-5 has-text-light" >
                Organizando, Criando e Editando Notas.. Pensamentos.. e Ideias{" "}
                <br />
                <br />
                Organização Pessoal de projetos, ideias pessoais e profissionais
              </h2>
              <Link to='/register' class="button is-outlined is-white is-large">
                <strong>Registre-se</strong>
              </Link>
            </div>
            <div class="img column is-6 offset-1">
              <img src={Home} />
            </div >
          </div>
        </container>
      </section>
    </>
  );
}
