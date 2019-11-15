export const templateHome = () => {

    const containerHome = document.createElement('div');
    const contentHome =
        `<article class="container">
            <h1>Animals Red</h1>
            <a href="#/login"> <button id="ingresar"> ingresar </button> </a>
        </article>
    `


    containerHome.innerHTML = contentHome;
    return containerHome;
}