  // script.js
  document.addEventListener('DOMContentLoaded', function() {
    loadProducts('Lácteos');  // Cargar una categoría por defecto
});

var products = {
    'Lácteos': [
        'Leche',
        'Queso',
        'Yogurt',
        'Mantequilla'
    ],
    'Despensa y Abarrotes': [
        'Arroz',
        'Frijoles',
        'Pasta',
        'Aceite'
    ],
    'Frutas y Verduras': [
        'Manzana',
        'Banana',
        'Zanahoria',
        'Tomate'
    ],
    'Limpieza del Hogar': [
        'Detergente',
        'Suavizante',
        'Jabón',
        'Escoba'
    ],
    'Bebidas': [
        'Agua',
        'Refresco',
        'Jugo',
        'Cerveza'
    ],
    'Salchichonería': [
        'Jamón',
        'Salami',
        'Tocino',
        'Salchichas'
    ],
    'Botana': [
        'Papas fritas',
        'Nueces',
        'Galletas',
        'Chocolates'
    ]
};

function loadProducts(category) {
    var ul = document.getElementById('productList');
    ul.innerHTML = '';  // Limpiar la lista antes de agregar los productos
    products[category].forEach(product => {
        var li = document.createElement('li');
        li.textContent = product;
        ul.appendChild(li);
    });
}

function showCategory(category) {
    loadProducts(category);
    document.getElementById('searchInput').value = '';  // Limpiar el campo de búsqueda
}

function filterList() {
    var input = document.getElementById('searchInput');
    var filter = input.value.toLowerCase();
    var ul = document.getElementById('productList');
    var li = ul.getElementsByTagName('li');

    for (var i = 0; i < li.length; i++) {
        var text = li[i].textContent || li[i].innerText;
        if (text.toLowerCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
// script.js
document.addEventListener("DOMContentLoaded", function() {
    function applyStyles(element, styles) {
        for (const property in styles) {
            element.style[property] = styles[property];
        }
    }

    const modal = document.getElementById("modal");
    const modalContent = modal.querySelector(".modal-content");
    const closeModal = document.getElementById("closeModal");
    const iniciarSesionForm = document.getElementById("iniciarSesionForm");
    const crearCuentaForm = document.getElementById("crearCuentaForm");
    const iniciarSesionLink = document.getElementById("iniciarSesionLink");
    const crearCuentaLink = document.getElementById("crearCuentaLink");
    const showPasswordSesion = document.getElementById("showPasswordSesion");
    const showPasswordCuenta = document.getElementById("showPasswordCuenta");
    const passwordFieldSesion = document.getElementById("contrasenaSesion");
    const confirmPasswordFieldSesion = document.getElementById("confirmarContrasenaSesion");
    const passwordStrengthSesion = document.getElementById("passwordStrengthSesion");
    const passwordFieldCuenta = document.getElementById("contrasenaCuenta");
    const confirmPasswordFieldCuenta = document.getElementById("confirmarContrasenaCuenta");
    const passwordStrengthCuenta = document.getElementById("passwordStrengthCuenta");

    applyStyles(modal, {
        display: 'none',
        position: 'fixed',
        zIndex: '1000',
        left: '0',
        top: '0',
        width: '100%',
        height: '100%',
        overflow: 'auto',
        backgroundColor: 'rgba(0,0,0,0.4)',
        paddingTop: '60px'
    });

    applyStyles(modalContent, {
        backgroundColor: '#fff',
        margin: '5% auto',
        padding: '20px',
        border: '1px solid #888',
        width: '80%',
        maxWidth: '600px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
        animation: 'fadeIn 0.3s'
    });

    applyStyles(closeModal, {
        color: '#aaa',
        float: 'right',
        fontSize: '28px',
        fontWeight: 'bold',
        cursor: 'pointer'
    });

    closeModal.addEventListener("mouseover", function() {
        closeModal.style.color = "#000";
    });

    closeModal.addEventListener("mouseout", function() {
        closeModal.style.color = "#aaa";
    });

    const formSections = document.querySelectorAll(".form-section");
    formSections.forEach(section => {
        applyStyles(section, {
            margin: '20px 0'
        });
    });

    const formColumns = document.querySelectorAll(".form-column");
    formColumns.forEach(column => {
        applyStyles(column, {
            display: 'flex',
            flexDirection: 'column',
            gap: '15px'
        });
    });

    const labels = document.querySelectorAll(".form-column label");
    labels.forEach(label => {
        applyStyles(label, {
            fontSize: '1rem',
            fontWeight: 'bold',
            color: '#333'
        });
    });

    const inputs = document.querySelectorAll(".form-column input");
    inputs.forEach(input => {
        applyStyles(input, {
            padding: '10px',
            fontSize: '1rem',
            border: '1px solid #ccc',
            borderRadius: '4px'
        });
    });

    const buttons = document.querySelectorAll(".btn");
    buttons.forEach(button => {
        applyStyles(button, {
            backgroundColor: '#4CAF50',
            color: 'white',
            padding: '15px 20px',
            textAlign: 'center',
            fontSize: '16px',
            cursor: 'pointer',
            borderRadius: '4px',
            border: 'none',
            marginTop: '20px',
            transition: 'background-color 0.3s'
        });

        button.addEventListener("mouseover", function() {
            button.style.backgroundColor = "#45a049";
        });

        button.addEventListener("mouseout", function() {
            button.style.backgroundColor = "#4CAF50";
        });
    });

    iniciarSesionLink.addEventListener("click", function() {
        iniciarSesionForm.style.display = "block";
        crearCuentaForm.style.display = "none";
        modal.style.display = "block";
    });

    crearCuentaLink.addEventListener("click", function() {
        crearCuentaForm.style.display = "block";
        iniciarSesionForm.style.display = "none";
        modal.style.display = "block";
    });

    closeModal.addEventListener("click", function() {
        modal.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    function togglePasswordVisibility(passwordField) {
        if (passwordField.type === "password") {
            passwordField.type = "text";
        } else {
            passwordField.type = "password";
        }
    }

    showPasswordSesion.addEventListener("click", function() {
        togglePasswordVisibility(passwordFieldSesion);
    });

    showPasswordCuenta.addEventListener("click", function() {
        togglePasswordVisibility(passwordFieldCuenta);
    });

    function checkPasswordMatch(password, confirmPassword, errorMessageElement) {
        if (password.value !== confirmPassword.value) {
            errorMessageElement.textContent = "Las contraseñas no coinciden.";
            return false;
        } else {
            errorMessageElement.textContent = "";
            return true;
        }
    }

    function updatePasswordStrength(password, strengthElement) {
        const passwordValue = password.value;
        let strengthMessage = "Seguridad de la Contraseña: ";
        if (passwordValue.length === 0) {
            strengthMessage += "Sin Contraseña";
        } else if (passwordValue.length < 6) {
            strengthMessage += "Muy débil";
        } else if (passwordValue.length < 10) {
            strengthMessage += "Débil";
        } else if (passwordValue.length < 15) {
            strengthMessage += "Moderada";
        } else {
            strengthMessage += "Fuerte";
        }
        strengthElement.textContent = strengthMessage;
    }

    passwordFieldSesion.addEventListener("input", function() {
        updatePasswordStrength(passwordFieldSesion, passwordStrengthSesion);
    });

    passwordFieldCuenta.addEventListener("input", function() {
        updatePasswordStrength(passwordFieldCuenta, passwordStrengthCuenta);
    });

    const formSesion = document.getElementById("formSesion");
    const formCuenta = document.getElementById("formCuenta");
    const errorMessagesSesion = document.getElementById("errorMessagesSesion");
    const errorMessagesCuenta = document.getElementById("errorMessagesCuenta");

    formSesion.addEventListener("submit", function(event) {
        event.preventDefault();
        if (checkPasswordMatch(passwordFieldSesion, confirmPasswordFieldSesion, errorMessagesSesion)) {
            // Aquí puedes agregar el código para enviar el formulario.
            alert("Iniciar Sesión exitoso.");
        }
    });

    formCuenta.addEventListener("submit", function(event) {
        event.preventDefault();
        if (checkPasswordMatch(passwordFieldCuenta, confirmPasswordFieldCuenta, errorMessagesCuenta)) {
            // Aquí puedes agregar el código para enviar el formulario.
            alert("Cuenta creada exitosamente.");
        }
    });
});
