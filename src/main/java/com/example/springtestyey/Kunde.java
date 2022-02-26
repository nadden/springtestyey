package com.example.springtestyey;

public class Kunde {
    private String navn;
    private String adresse;
    private String eierBil;


    public Kunde(String navn, String adresse, String eierBil) {
        this.navn = navn;
        this.adresse = adresse;
        this.eierBil = eierBil;
    }

    public Kunde() {

    }

    public String getNavn() {
        return navn;
    }

    public void setNavn(String navn) {
        this.navn = navn;
    }

    public String getAdresse() {
        return adresse;
    }

    public void setAdresse(String adresse) {
        this.adresse = adresse;
    }
    public String getEierBil(){
        return eierBil;
    }
    public void setEierBil(String eierBil){
        this.eierBil = eierBil;
    }

}

