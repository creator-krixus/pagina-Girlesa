(function () {
    var options = {
        whatsapp: "+573006795566", // Numero de Whastapp
        call_to_action: "Escribeme deseo atenderte", // Mensaje
        position: "right", // La posicion debe estar a la derecha o izquierda 'right' or 'left'
    };
    var proto = document.location.protocol, host = "getbutton.io", url = proto + "//static." + host;
    var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
    s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
    var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
})();