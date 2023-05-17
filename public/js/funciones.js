function validateDates() {
    var departingDate = new Date(document.getElementById("departing").value);
    var returningDate = new Date(document.getElementById("returning").value);
    var currentDate = new Date();
    let errores = '';

    if (departingDate <= currentDate || returningDate <= currentDate) {
        errores += "Las fechas deben ser superiores a la fecha actual.";
    }

    if (departingDate > returningDate) {
        errores += "La fecha de partida no puede ser mayor a la fecha de regreso.";
    }

    document.getElementById('error').textContent = errores;
}
