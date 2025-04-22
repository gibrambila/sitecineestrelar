var token = localStorage.getItem('token');
var cargo = localStorage.getItem('cargo');
if (token == null) {
    window.location.href = 'login.html';
} else if (cargo != "ADM") {
    
    Swal.fire({
        icon: "error",
        title: "NEGADO",
        text: "Você não tem permissão para acessar esta página!",
      }).then(() => {
        window.location.href = 'index.html';
      });
}