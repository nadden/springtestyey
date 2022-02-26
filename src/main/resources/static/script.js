$(function(){
    hentAlleKunder();
});

function hentAlleKunder() {
    $.get( "/hentKunder", function( kunder ) {
        formaterKunder(kunder);
    });
}

function formaterKunder(kunder){
    var ut = "<table class='table table-striped'>" +
        "<tr>" +
        "<th>Fornavn</th><th>Etternavn</th><th>Merke</th>" +
        "</tr>";

    for(const kunde of kunder ){
        ut+="<tr>" +
            "<td>"+kunde.fornavn+"</td>"+
            "<td>"+kunde.etternavn+"</td>"+
            "<td>"+kunde.eierBil+"</td>" +
            "</tr>";
    }
    $("#kundene").html(ut);
}

function slettKundene() {
    $.get( "/slettAlleKunder", function() {
    window.location.href = "/";
    });
}