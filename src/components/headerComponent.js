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
        <div class="score-wrapper">
            <h1>score</h1>
            <span class="score-value"></span>
        </div>
        
    `;
    header.innerHTML = template;
    return header;
}