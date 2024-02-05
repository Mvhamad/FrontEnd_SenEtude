import "./signup.css";
import { useState } from "react";
import logoSenetude from "../../assets/logo-senetude.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import config from "../../../config.json";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [hidePassword, setHidePassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [newStudent, setNewStudent] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    birthDayDate: "",
    birthPlace: "",
    address: "",
    phoneNumber: "",
  });
  const navigate = useNavigate();

  const {
    firstName,
    lastName,
    email,
    password,
    birthDayDate,
    birthPlace,
    address,
    phoneNumber,
  } = newStudent;

  const OnInputChange = (e) => {
    setNewStudent({ ...newStudent, [e.target.name]: e.target.value });
  };

  const signupValidation = async (e) => {
    e.preventDefault();
    try {
      // Effectuez ici la validation du formulaire
      if (
        !firstName ||
        !lastName ||
        !email ||
        !password ||
        !birthDayDate ||
        !birthPlace ||
        !address ||
        !phoneNumber
      ) {
        setErrorMsg("Veuillez remplir tous les champs.");
      }

      // Validez d'autres conditions si nécessaire (par exemple, l'email doit être au bon format)

      // Envoyez les données d'inscription au serveur
      const response = await axios.post(`${config.apiUrl}/users/signup`, newStudent  );

      // Traitez la réponse du serveur (par exemple, redirigez l'utilisateur après une inscription réussie)
      if (response.data.status === 201) {
        toast("Inscription réussie...!");
        // Redirigez l'utilisateur vers la page de connexion ou une autre page appropriée
        navigate("/signin");
      } else {
        setErrorMsg("Erreur lors de l'inscription. Veuillez réessayer.");
      }
    } catch (error) {
      setErrorMsg(error.message);
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
          Créer votre compte
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={(e) => signupValidation(e)} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Prénom
            </label>
            <div className="mt-2">
              <input
                id="firstName"
                name="firstName"
                type="firstName"
                value={firstName}
                onChange={OnInputChange}
                autoComplete="firstName"
                required
                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Nom
            </label>
            <div className="mt-2">
              <input
                id="lastName"
                name="lastName"
                type="lastName"
                value={lastName}
                onChange={OnInputChange}
                autoComplete="lastName"
                required
                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Date de naissance
            </label>
            <div className="mt-2">
              <input
                id="birthDayDate"
                name="birthDayDate"
                type="date"
                value={birthDayDate}
                onChange={OnInputChange}
                autoComplete="birthDayDate"
                required
                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Lieu de naissance
            </label>
            <div className="mt-2">
              <input
                id="birthPlace"
                name="birthPlace"
                type="birthPlace"
                value={birthPlace}
                onChange={OnInputChange}
                autoComplete="birthPlace"
                required
                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

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
                autoComplete="email"
                value={email}
                onChange={OnInputChange}
                required
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
                onChange={OnInputChange}
                type={hidePassword ? "password" : "text"}
                autoComplete="current-password"
                required
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
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Adresse
            </label>
            <div className="mt-2">
              <input
                id="address"
                name="address"
                value={address}
                type="address"
                autoComplete="address"
                onChange={OnInputChange}
                required
                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Numéro de Téléphone
            </label>
            <div className="mt-2">
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="phoneNumber"
                value={phoneNumber}
                onChange={OnInputChange}
                autoComplete="phoneNumber"
                required
                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            {errorMsg && <div className="text-red-500 text-sm">{errorMsg}</div>}
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              S'inscrire
            </button>
          </div>
        </form>
        <p className="mt-10 text-center text-sm text-gray-500">
          Vous êtes un membre ?<br />
          <Link to={"/signin"}>
            <span
              href="#"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Se connecter
            </span>
          </Link>
        </p>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Signup;
