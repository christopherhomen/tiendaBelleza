//Iniciaizar una variable que capture los datos del DOM
//en el HTML

const logiForm = document.querySelector('#loginForm');
//Inicializaremos un evento que nos envie la info
//se abrevia event con e
logiForm.addEventListener('submit',(e) =>{
    e.preventDefault()

    //Variable que captura datos del correo en el DOM
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    //la variable constante user inicializa y traer los 
    //datos que estan en el localStorage

    //JSON.parse nos especifica en donde se 
    //alamcena la informacion de un arreglo

    // || [] significa que en el LocalStorage
    //se estan almacenando la informacion en un arreglo

    const Users =JSON.parse(localStorage.getItem('users')|| [])

    //Inicializamos una variable validUser que es para
    //validar inofrmacion    
    //find() busca elementos
    //comprueba si los datos que ingreso al logearme existen 
    const validUsers = Users.find(user => user.email === email && user.password === password)
    
    //En caso de no concordar los datos, muestra una alerta 
    if(!validUsers){
        return alert('Usuario y/o contrase.. incorrectas')
    }
    //Si son correctos, mostrara un mensaje de Bienvenida
    // Muestra la pop-up    
    alert(`Bienvenido ${validUsers.name}`)

    //localstorage.setItem envia o almaacena los datos
    //'login_success' que se Logueo correctamente
    //JSON.stringify(validuser) nos convierte los datos de json a string 
    localStorage.setItem('login_success', JSON.stringify(validUsers))
    //Si es exitoso redirecciona al home
    window.location.href='index.html'
})