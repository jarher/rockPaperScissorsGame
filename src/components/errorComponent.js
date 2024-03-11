export const errorComponent = () => {
    const error = document.createElement("section");
    error.className = "error";
    error.textContent = "Error 404, not found"
    return error;
}