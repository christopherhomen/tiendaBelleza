popupwhatsApp =()=>{
    /*funcion con asignacion entre parentesis*/ 
    let btnclosepopup = document.querySelector('.closePopup');
    let openpopup = document.querySelector('.whatsapp-button');
    let popup = document.querySelector('.popup-whatsapp');
    let sendbtn = document.getElementById('send-btn');

    btnclosepopup.addEventListener("click",()=>{
        popup.classList.toggle('is-active-whatsapp-popup')

    })
    openpopup.addEventListener("click",()=>{
        popup.classList.toggle('is-active-whatsapp-popup')
    popup.style.animation="fadeIn .6s 0.0s both"
    })
    sendbtn.addEventListener("click",()=>{
        let msg = document.getElementById('whats-in').value;
        let relmsg = msg.replace(/ /g,"%20");
        window.open('https://wa.me/+573133824227?text='+relmsg, '_blank');

        /*cuando se envie el mensaje se captura lo consignado mediante el replace
        al estar el espacio en blanco el replace capturara y se mostrara el mensaje
        blank abre la conversacion, text captura el texto que se envia*/ 
    })
    setTimeout(() =>{
        popup.classList.toggle('is-active-whatsapp-popup');
    }, 3000);
}

popupwhatsApp();
