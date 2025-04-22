

$(document).ready(function() {

    let btn = document.querySelector('.lnr-eye');

    if (btn) {
        btn.addEventListener('click', function() {
            let input = document.querySelector('#password');
            if(input.getAttribute('type') == 'password') {
                input.setAttribute('type', 'text');
            } else {
                input.setAttribute('type', 'password');
            }
        });
    }
    

    $("#cddselect").on("click", function() {
        $("#selectcbc").css("display", "block");
    })

    $("#optionbgi").on("click", function() {
        $("#selectcbc").css("display", "none");
        $("#cddselect").html("BIRIGUI");
    })

    $("#optionata").on("click", function() {
        $("#selectcbc").css("display", "none");
        $("#cddselect").html("ARAÇATUBA");
    })






    $("#avatar").on("click", function() {
        $("#divlateral").css("right", "0px");
    })

    $("#fechar").on("click", function() {
        $("#divlateral").css("right", "-500px");
    })

  
});

document.getElementById("btnlogout").addEventListener("click", function() {
    localStorage.clear();
    window.location.href = "login.html";
});


