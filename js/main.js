/*alert("JavaScript Habilitado");*/
 Swal.fire({
   icon: 'error',
   title: 'Oops...',
   html: '<b>Usuario y/o contraseña incorrectos</b>',
   footer: '<a href="#" class"Login">¿Olvido su contraseña?</a>'
})
window.location.replace("http://santyswebsite.epizy.com/");
