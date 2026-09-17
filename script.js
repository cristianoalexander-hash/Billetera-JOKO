// ======================================
// LOGIN
// ======================================

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const correo = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (
            correo === "admin@joko.cl" &&
            password === "123456"
        ) {

            alert("Bienvenido a JoKo Wallet");

            window.location.href = "menu.html";

        } else {

            alert("Correo o contraseña incorrectos");

        }

    });

}


// ======================================
// DEPÓSITOS
// ======================================

let saldo = 500000;

$(document).ready(function () {

    if ($("#depositForm").length) {

        $(".card").hide().fadeIn(1200);

        $("#depositForm").submit(function (e) {

            e.preventDefault();

            let monto = parseInt($("#montoDeposito").val());

            if (isNaN(monto) || monto <= 0) {

                alert("Ingrese un monto válido");

                return;

            }

            saldo += monto;

            $("#saldoActual").text(
                "Saldo Actual: $" +
                saldo.toLocaleString("es-CL")
            );

            $("#mensaje")
                .removeClass("d-none")
                .html(
                    "✅ Depósito realizado correctamente por $" +
                    monto.toLocaleString("es-CL")
                );

            $("#montoDeposito").val("");

        });

    }

});


// ======================================
// ENVIAR DINERO
// ======================================

$(document).ready(function () {

    $("#btnTransferir").click(function () {

        let destinatario =
            $("#destinatario").val();

        let monto =
            parseInt($("#montoTransferencia").val());

        if (
            destinatario === "" ||
            isNaN(monto) ||
            monto <= 0
        ) {

            alert("Complete todos los campos");

            return;

        }

        alert(
            "Transferencia enviada a " +
            destinatario +
            " por $" +
            monto.toLocaleString("es-CL")
        );

        $("#destinatario").val("");
        $("#montoTransferencia").val("");

    });

});


// ======================================
// AGREGAR CONTACTOS
// ======================================

$(document).ready(function () {

    $("#btnAgregar").click(function () {

        let contacto =
            $("#nuevoContacto").val();

        if (contacto === "") {

            alert("Ingrese un nombre");

            return;

        }

        $("#listaContactos").append(
            "<li class='list-group-item'>" +
            contacto +
            "</li>"
        );

        $("#nuevoContacto").val("");

    });

});


// ======================================
// MENU PRINCIPAL
// ======================================

$(document).ready(function () {

    if ($(".card").length) {

        $(".card").hide();

        $(".card").fadeIn(1500);

    }

});


// ======================================
// TRANSACCIONES
// ======================================

$(document).ready(function () {

    if ($("#listaMovimientos").length) {

        $("#listaMovimientos").hide();

        $("#listaMovimientos").fadeIn(1500);

    }

});


// ======================================
// MENSAJE DE BIENVENIDA
// ======================================

$(document).ready(function () {

    console.log("JoKo Wallet cargado correctamente");

});