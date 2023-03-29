import Header from "../../../components/header";
import Logo from "../../../assets/images/note.png";
import "../../../styles/pages/register.sass";
import RegisterForm from "../../../components/auth/register_form";

export default function RegisterScreen() {
  return (
    <>
        <Header />
        <section class="section are-medium" className="auth">
          <div class="container">
            <div class="columns is-centered">
              <div class="column is-3">
                <div class="card">
                  <div class="card-content">
                    <section class="section">
                  <div class="column is-12">
                    <img class="image" src={Logo}></img>
                    </div>
                    <div class="column is-12">
                    <h1 class="title is-4  has-text-grey has-text-centered">
                      Your notes on the cloud
                    </h1>
                    </div>
                    <RegisterForm/>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  );
}
