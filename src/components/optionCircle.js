export const optionCircle = ({nameClass, imgUrl}) => {
    const img = document.createElement('img');
    img.classList.add(nameClass);
    img.classList.add("option");
    img.src = imgUrl;
    return img;
}