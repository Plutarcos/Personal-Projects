relogio();
function relogio() {

    var data = new Date();
    var dia = data.getDate(); //1-31
    var dia_sem = data.getDay(); //0-6
    var mes = data.getMonth(); //0-11
    var ano2 = data.getYear(); // 2 dígitos
    var ano4 = data.getFullYear(); // 4 dígitos
    var hora = data.getHours(); //0-23
    var min = data.getMinutes(); //0-59
    var seg = data.getSeconds(); //0-59

    document.getElementById('horario').innerHTML = dia+"/"+(mes+1)+"/"+ano4+" "+hora+":"+min+":"+seg;
    setTimeout('relogio()', 1000);
}