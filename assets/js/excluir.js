const divProgramacao = document.querySelectorAll(".img-programacao");

divProgramacao.forEach(div => {
  div.addEventListener("click", function(event) {
    const elementoClicado = event.target;

    if (elementoClicado.classList.contains("btnexcluir")) {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
      });

      swalWithBootstrapButtons.fire({
        title: "Tem certeza?",
        text: "Você não poderá recuperar depois!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sim, excluir!",
        cancelButtonText: "Cancelar",
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Excluído!',
            'O filme foi removido.',
            'success'
          )

          // Remove a div pai
          div.remove();

        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(
            'Cancelado',
            'Seu filme está seguro :)',
            'error'
          )
        }
      })
    }
  });
});
