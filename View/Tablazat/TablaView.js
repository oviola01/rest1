import { adatLeiro } from "../adatLeiro.js";
import FejlecView from "./FejlecView.js";
import SorView from "./SorView.js";

export default class TablaView{
    #list=[];
    constructor(list, szuloElem){
        this.#list=list;
        szuloElem.append(`<table class='table table-striped'>
                                <thead></thead>
                                <tbody>
                                </tbody>
                            </table>`);
        
        this.theadElem=szuloElem.find("thead");
        this.tbodyElem=szuloElem.find("tbody");
        console.log(this.tbodyElem);
        new FejlecView(adatLeiro,this.theadElem);
        this.sorMegjelenit();
    };

    sorMegjelenit(){
        //itt fogjuk példányosítani a sort, annyiszor, ahány elem van a listában
        this.#list.forEach((elem, index)=>{
            new SorView(index, elem, this.tbodyElem);
          }
        )
    };
}