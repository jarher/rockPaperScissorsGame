export const buttonComponent = ({nameClass, element}) => {
    const template = `
    <button class="${nameClass}">${element}</button>
    `;
    
    return template;
}