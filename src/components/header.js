export const headerComponent = () => {
    const header = document.createElement('header');
    header.className = 'header';
    const template = `
        <ul class="list">
            <li>ROCK</li>
            <li>PAPER</li>
            <li>SCISSOR</li>
            <li>LIZARD</li>
            <li>SPOCK</li>
        </ul>
        <h1>
        <span>score</span>
        <span class="score-value"></span>
        </h1>
    `;
    header.innerHTML = template;
    return header;
}