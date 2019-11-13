export const inicioo = () => {

    const containerHome = document.createElement('div');

    const contentHome =
        ` <p> sesion iniciada ya dentro de la aplicacion </p>
    <button id="close">cerrar sesion</button>`;

    containerHome.innerHTML = contentHome;

    return containerHome;
}