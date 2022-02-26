
function regBil(){
    const bil = {
        personnummer : $("#personnummer").val(),
        navn : $("#navn").val(),
        adresse : $("#adresse").val(),
        kjennetegn : $("#kjennetegn").val(),
        bilmerke : $("#bilmerke").val(),
        biltype : $("#biltype").val(),
    };
    $.post("/lagre", bil, function (){
        hentAlle();
    });
    $("#personnummer").val("");
    $("#navn").val("");
    $("#adresse").val("");
    $("#kjennetegn").val("");
    $("#bilmerke").val("");
    $("#biltype").val("");
}

function hentAlle(){
        $.get("/hentAlle", function (data){
        formaterData(data);
    });
}

function formaterData(biler){
    let ut = "<table><tr><th>Personnr</th><th>Navn</th><th>Adresse</th><th>Kjennetegn</th>" +
        "<th>Merke</th><th>Type</th></tr>";
    for (const bil of biler){
        ut+= "<tr><td>"+bil.personnummer+"</td><td>"+bil.navn+"</td><td>"+bil.adresse+"</td>" +
            "<td>"+bil.kjennetegn+"</td><td>"+bil.bilmerke+"</td><td>"+bil.biltype+"</td></tr>";
    }
    ut+="</table>";
    $("#bilene").html(ut);
}

function slettBil(){
    $.get("/slettAlle", function (){
        hentAlle();
    });

}