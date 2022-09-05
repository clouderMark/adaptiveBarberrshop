import * as flsFunctions from "./modules/functions.js";
import { mainMenu } from "./modules/mainMenu.js";
import { mistake } from "./modules/mistake.js";
import { modalLoginForm } from "./modules/modal-login.js";
import { sliderAdvantages } from "./modules/sliderAdvantages.js";
import { sliferReviews } from "./modules/sliderReviews.js";

flsFunctions.isWebp();
mainMenu();

modalLoginForm ();
let main = document.querySelector(".main");
if (main.classList.contains("register-main")) {
    mistake();
}

if (main.classList.contains("page-main")) {
    sliderAdvantages()
    sliferReviews()
}



