$(function(){
    hentAlleBiler();
});

function hentAlleBiler() {
    $.get("/hentBiler", function( biler ) {
        formaterBiler(biler);
    });
}

function formaterBiler(biler){
    let ut = "<select id='valgtBil'>";
    for(const bil of biler ){
        ut+="<option value='"+bil.merke+"'>"+bil.modell+"</option>";
    }
    ut+="</select>"; $("#bilene").html(ut);
}

function lagreKunde() {
    const kunde = {
        fornavn : $("#fornavn").val(),
        etternavn : $("#etternavn").val(),
        eierBil : $("#valgtBil").val()
    };
    $.post("/lagreKunde",kunde,function(){
        window.location.href ="/";
    });
}