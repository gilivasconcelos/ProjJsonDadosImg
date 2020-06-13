


jQuery(document).ready(function ($) {

    // All your code using $
    $(document).ready(function () {
        BuscarDadosImg();
    });

});


//Funcao BuscarDadosImg
function BuscarDadosImg() {
    $.ajax({
        url: "/Home/ListarDadosImg",
        type: "GET",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            var html = '';
            $.each(result, function (key, item) {
                html += '<tr>';
                html += '<td>' + item.IdDadosImg + '</td>';
                html += '<td>' + item.FileSizeBytes + '</td>';
                html += '<td>' + item.Url + '</td>';
                html += '<td>' + item.Descricao + '</td>';
                html += '<td><a href="#"  onclick="return buscarDadosImgPorId(' + item.IdDadosImg + ')">Editar</a> | <a href="#" onclick="deletarDadosImg(' + item.IdDadosImg + ')">Deletar</a></td>';
                html += '</tr>';
            });
            $('.tbody').html(html);
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
}


//Add novo DadosImg
function inserirDadosImg() {

    var dadosImgObj = {
        FileSizeBytes: $('#FileSizeBytes').val(),
        Url: $('#Url').val(),
        Descricao: $('#Descricao').val()
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
    });

}


//buscar dadosImgPorId
function buscarDadosImgPorId(IdDadosImg) {
    $('#IdDadosImg').css('border-color', 'lightgrey');
    $('#FileSizeBytes').css('border-color', 'lightgrey');
    $('#Url').css('border-color', 'lightgrey');
    $('#Descricao').css('border-color', 'lightgrey');
    $.ajax({
        url: "/Home/BuscarDadosImgPorId/" + IdDadosImg,
        type: "GET",
        contentType: "application/json;charset=UTF-8",
        dataType: "json",
        success: function (result) {
            $('#IdDadosImgEditar').val(result.IdDadosImg);
            $('#FileSizeBytesEditar').val(result.FileSizeBytes);
            $('#UrlEditar').val(result.Url);
            $('#DescricaoEditar').val(result.Descricao);
            $('#modalEditar').modal('show');
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
    return false;
}

//Editar dadosImg

function atualizarDadosImg() {

    var dadosImgObj = {
        IdDadosImg: $('#IdDadosImgEditar').val(),
        FileSizeBytes: $('#FileSizeBytesEditar').val(),
        Url: $('#UrlEditar').val(),
        Descricao: $('#DescricaoEditar').val(),
    };
    $.ajax({
        url: "/Home/UpdateDadosImg",
        data: JSON.stringify(dadosImgObj),
        type: "POST",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            buscarDadosIgm();
            alert("Dados Atualizados com Sucesso!");
            $('#modalEditar').modal('hide');
            loadData();
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
}

//deletar dadosImg
function deletarDadosImg(id) {
    var ans = confirm("Deseja deletar o item?");
    if (ans) {
        $.ajax({
            url: "/Home/DeletarDadosImg/" + id,
            type: "POST",
            contentType: "application/json;charset=UTF-8",
            dataType: "json",
            success: function (result) {
                BuscarDadosImg();
            },
            error: function (errormessage) {
                alert(errormessage.responseText);
            }
        });
    };

}

