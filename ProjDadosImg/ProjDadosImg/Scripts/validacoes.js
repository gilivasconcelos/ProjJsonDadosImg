


    function funcMostrarImg() {
                
        document.getElementById('btnShowImg').hidden = true;

        document.getElementById('btnSalvar').hidden = false;
        document.getElementById('btnTrocarImg').hidden = false;
        document.getElementById('btnExcluirImg').hidden = false;

        buscaImagem();

    }

var avisado = 0;
function funcTrocarImg() {

    
    if (avisado == 0) { 
      var r = confirm("Se você trocar a imagem, a descrição também mudará . Deseja continuar?");
        if (r == true) {
           
           avisado = 1;
         }
     }
    buscaImagem();
}

    function funcExcluirImg() {
        location.reload();

}

var descricao;
var url;
var fileSizeBytes;

    function buscaImagem() {

        var auxOxhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');

        function statusOfReport() {
            if (auxOxhr.readyState == 4)               // Request completado.
                buscaJson(this.responseText);     // após setado, mostra o retorno.
        }
        auxOxhr.onreadystatechange = statusOfReport;
        auxOxhr.open("GET", "https://random.dog/woof.json", true);   // Se false requeste sincrono, Se true requeste assincrono.

        auxOxhr.send();

        function buscaJson(auxJson) {
            var auxArr = [];
            auxArr = JSON.parse(auxJson); 	// preenche o array com o json obtido.

            var div = document.getElementById('imgDog');     // <div> padrão fixa da imagem
            div.innerHTML = '';

            // Cria elementos <div> um para url e outro para imagem
            var divLeft = document.createElement('div');
            divLeft.setAttribute('id','Url' );
            divLeft.innerHTML = auxArr.url;

            var img = document.createElement('img');    // Cria o elemento <img>.
            img.src = auxArr.url;                // Url da imagem.
            descricao = "Dados da Imagem:" + "\n" + "FileSizeBytes: " + auxArr.fileSizeBytes + "\n" + "Url: " + auxArr.url;
            document.getElementById('Descricao').value = descricao;
            url = auxArr.url;
            fileSizeBytes = auxArr.fileSizeBytes;

            var divRight = document.createElement('div');
            divRight.setAttribute('style', 'border-left: solid 1px #ddd;');
            divRight.appendChild(img);

            // adiciona div dentro da div pai.
            div.appendChild(divLeft);
            div.appendChild(divRight);

            //Se a extensão for .mp4 ou .webm busca novamente
            var auxA = auxArr.url;
            var auxB = auxArr.url;
            auxA = auxA.search(".mp4");
            auxB = auxB.search(".webm");          

            if (auxA >= 1) {
                buscaImagem();
            }
            if (auxB >= 1) {
                buscaImagem();
            }



        }
};


function salvarNoCrud() {

    salvarNoCrudAux(descricao, url, fileSizeBytes);
    
    var r = false;
    r = confirm("Salvo com Sucesso! Deseja ir para o Crud DadosImg?");
    if (r == true) {

        $.ajax({
            url: "/Home/DadosImg", success: function (result) {
                $("#DadosImg").html(result);
                window.location.href = "/Home/DadosImg";
            }
        });
    }
    
       
    
}

//Add novo DadosImg
function salvarNoCrudAux(descricao, url, fileSizeBytes) {

    var urlAux = '<a href="' + url + '">' + 'acessar' + '</a>';

    var dadosImgObj = {
        FileSizeBytes: fileSizeBytes,
        Url: urlAux,
        Descricao: descricao
    };
    $.ajax({
        url: "/Home/AddNewDadosImg",
        data: JSON.stringify(dadosImgObj),
        type: "POST",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            buscarDadosIgm();
            $('#ModalAdicionar').modal('hide');
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    })
}

