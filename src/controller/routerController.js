import { Router } from "../routes.js";

export const routerController = (e) => {
    window.addEventListener("hashchange", () => Router(e));
}