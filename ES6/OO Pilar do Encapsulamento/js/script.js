class Tv{
    constructor(){
        this._relacaoCanais = Array(2, 4, 5, 7, 10)
        this._canalAtivo = 5
        this._volume = 5 
        /* Por convenção, quando se quer colocar um atributo como private
           basta colocar o _ antes da palavra pois o JSEC6 não aceita private.
        */
    }

    //getters setters
    get canalAtivo(){
        return this._canalAtivo
    }

    set canalAtivo(canal){
        //
        if(this._relacaoCanais.indexOf(canal) !== -1){
            this._canalAtivo = canal
        }
        
    }

}
let tv = new Tv() //instancia tv (Objeto tv)
tv.canalAtivo = 7
console.log(tv.canalAtivo)