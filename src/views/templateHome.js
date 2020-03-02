export const templateHome = () => {
  const containerHome = document.createElement("div");
  const contentHome = ` 
<div  class="containerHome">

<div class="transpan">

    <div class="welcomeText">
         <h1 class="little">       
FOR
          </h1>

          <h1 class="animals"> 
ANIMALS
          </h1>
    </div>

    <div class="buttons">
        <a href="#/login">
             <button id="Login" class="btnL">
             SignIn 
             </button>
         </a>
           
         <a href="#/registry"> 
           <button id="signIn" class="btnR"> 
                Registry
            </button>
         </a>

     </div>

     <div>   
 </div>      
    `;

  containerHome.innerHTML = contentHome;
  return containerHome;
};
