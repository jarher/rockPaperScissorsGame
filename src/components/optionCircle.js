export const optionCircle = ({nameClass, imgUrl}) => {
    const figure = document.createElement("figure");
    figure.classList.add(nameClass);
    figure.classList.add("option");
    const img = document.createElement('img');
    img.src = imgUrl;
    figure.appendChild(img);
    return figure;
}