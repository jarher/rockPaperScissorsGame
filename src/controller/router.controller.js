import { Router } from "../routes.js";

export const routerController = () => {
    window.addEventListener("hashchange", () => Router());
}