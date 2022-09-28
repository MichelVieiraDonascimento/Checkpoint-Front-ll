
function insert(n){
    console.log (n)
    if(n !== -1){
    ///let perfil = './assets/avatar/268 150p-02.jpg>'
    //document.getElementsByClassName("user-image").innerHTML= perfil
    let url = `/assets/avatar/268 150p-0${n}.jpg`
    avatar[0].removeAttribute('src')
    avatar[0].setAttribute ('src', url)
    
    }else{}
    
    if(n !== -1){
        nav.classList.toggle("active"); 
    }
}

const bar = document.querySelector('.scales');
const nav = document.querySelector('.avatar-container');
const escolha = document.querySelector(".avatar")

bar.addEventListener("click", () => {
    nav.classList.toggle("active");

} )


// escolha.addEventListener("click", () => {
    
//        nav.classList.toggle("active"); 
    
// }  )

console.log(escolha);


