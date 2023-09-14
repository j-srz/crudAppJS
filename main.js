import "./style.css";
import { usersApp } from "./src/users/users-app";

document.querySelector("#app").innerHTML = `

    <h1 id="app-title">Vite+JS</h1>
    <div class="card"></div>

  </div>
`;

const element = document.querySelector(".card");

usersApp( element );
