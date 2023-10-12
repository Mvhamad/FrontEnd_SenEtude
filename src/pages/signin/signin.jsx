import React from "react";
import "./signin.css";
import { useState } from "react";
import logoSenetude from "../../assets/logo-senetude.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import apiUrl from "../../../config.json";

const Signin = () => {
  const [hidePassword, setHidePassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [student, setStudent] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const { email, password } = student;
  const OnInputChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Envoyer les données d'authentification au serveur
      const response = await axios.post(`${apiUrl}/signin`, {
        email,
        password,
      });

      // Traitement de la réponse du serveur (par exemple, rediriger l'utilisateur après une connexion réussie)
      if (response.data.succes  ) {
        // Rediriger l'utilisateur vers la page d'accueil ou une autre page appropriée
        const tok = localStorage.setItem("Token", response.data.token);
        console.log(tok);
        // Rediriger l'utilisateur vers la page d'accueil ou une autre page appropriée
        navigate("/back-office");
      } else {
        setErrorMsg("Identifiants invalides. Veuillez réessayer.");
      }
    } catch (error) {
      setErrorMsg("Une erreur s'est produite. Veuillez réessayer plus tard.");
    }
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src={logoSenetude}
          alt="Senetude"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Se connecter à votre compte
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                autoComplete="email"
                required
                onChange={OnInputChange}
                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Mot de passe
              </label>
            </div>
            <div className="flex items-center mt-2">
              <input
                id="password"
                name="password"
                value={password}
                type={hidePassword ? "password" : "text"}
                autoComplete="current-password"
                required
                onChange={OnInputChange}
                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <i
                onClick={() => setHidePassword(!hidePassword)}
                className={
                  hidePassword
                    ? "fa-solid fa-eye cursor-pointer text-indigo-600 ml-2"
                    : "fa-solid fa-sharp fa-eye-slash cursor-pointer text-indigo-600 ml-2"
                }
              ></i>
            </div>
            <div className="text-sm mt-2">
              <span className="font-semibold text-indigo-600 hover:text-indigo-500">
                Mot de passe oublié
              </span>
            </div>
          </div>

          <div>
            <Link to={"/signin"}>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Se connecter
              </button>
            </Link>
          </div>
          {errorMsg && <div className="text-red-500 text-sm">{errorMsg}</div>}
        </form>
        <p className="mt-10 text-center text-sm text-gray-500">
          Vous n'êtes pas un membre ?<br />
          <Link to={"/signup"}>
            <span
              href="#"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              S'inscrire
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
