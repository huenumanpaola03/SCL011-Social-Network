export const templateHome = () => {

    const containerHome = document.createElement('div');
    const contentHome =
        `
    <h1>HOME</h1>
    <a href="#/login"> <button id="ingresar"> ingresar </button> </a>
    `;

    containerHome.innerHTML = contentHome;
    return containerHome;
}