import Logo from "../../assets/images/note.png";
import { Link } from "react-router-dom";
import '../../styles/pages/header.sass';

export default function Header() {
  return (
    <>
      <nav class="navbar is-black-ter">
        <section class="container">
          <div class="navbar-brand">
           <Link to="/" ><img src={Logo} /></Link>
          </div>
          <div class="navbar-menu">
            <div class="navbar-item navbar-end">
              <div class="columns">
                <div class="column"><Link to="/register" class="button is-outlined  is-primary">Registre-se</Link></div>
                <div class="column"><Link to="/login" class="button is-white has-text-primary">Login</Link></div>
              </div>
            </div>
          </div>
        </section>
      </nav>
    </>
  );
}
