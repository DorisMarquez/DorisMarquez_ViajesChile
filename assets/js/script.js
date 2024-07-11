$(document).ready(function() {

    $('#enviar-mensaje').tooltip({
        title: 'Presiona para enviar tu mensaje',
        placement: 'bottom'
    });

    $('#enviar-mensaje').on('click', function() {
        alert('El mensaje fue enviado correctamente...');
    });

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