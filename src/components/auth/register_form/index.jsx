import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserService from "../../../services/user";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  //usar hook de redirect = useNavigation no rect router dom v6
  const [redirectLogin, setRedirectLogin] = useState(false);
  const [erro, setErro] = useState(false);

  const handleSubmit = async (eve) => {
    eve.preventDefault();
    try {
        const user = await UserService.register({name:name, email:email, password:password})
        setRedirectLogin(true);
    } catch (erro) {
        setErro(true)
    }


  }

  const navigate = useNavigate();
  if (redirectLogin) return navigate("/login");

  return (
    <>
      <div class="columns is-centered">
        <form class="" onSubmit={handleSubmit}>
          <div class="column is-12">
            <div class="field">
              <p class="control">
                <input
                  class="input"
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </p>
            </div>
            <div class="field">
              <p class="control">
                <input
                  class="input"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </p>
            </div>
            <div class="field">
              <p class="control">
                <input
                  class="input"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </p>
            </div>
            <div class="field">
              <p class="control">
                <div class="columns is-centered">
                  <div class="column is-centered">
                    <button class="button is-success">Registre-se</button>
                  </div>
                  <div class="column is-centered">
                    <a
                      class="button is-outlined is-white has-text-success"
                      onClick={(e) => setRedirectLogin(true)}
                    >
                      Login
                    </a>
                  </div>
                </div>
              </p>
            </div>
            { erro && <p class="help is-danger" >Email or Password invalid</p> }
          </div>
        </form>
      </div>
    </>
  );
}
