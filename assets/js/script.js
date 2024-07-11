$(document).ready(function() {

    // Tooltip sobre boton enviar

    $('#enviar-mensaje').tooltip({
        title: 'Presiona para enviar tu mensaje',
        placement: 'bottom'
    });

    // Mensaje de alerta cuando se presiona el bonton enviar

    $('#enviar-mensaje').on('click', function() {
        alert('El mensaje fue enviado correctamente...');
    });

    // Toltip sobre cada iconos de redes sociales

    $('#github').tooltip({
        title: 'ir a GitHub',
        placement: 'top'
    });

    $('#linkedin').tooltip({
        title: 'ir a Linkedin',
        placement: 'bottom'
    });

    $('#x').tooltip({
        title: 'ir a X',
        placement: 'top'
    });

    $('#facebook').tooltip({
        title: 'ir a Facebook',
        placement: 'bottom'
    });

});