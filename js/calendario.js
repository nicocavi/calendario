class Calendario{

    constructor(){
        this.meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
        this.dias = ['D', 'L', 'M', 'M', 'J', 'V', 'S']
        this.dia = new Date()
        this.table = document.createElement("table");
        this.table.setAttribute("id", "table-calendario");
        this.bottons;
    }

    obtenerFechas(ano, mes){
        let aux = new Date(ano, mes)
        let result = [];
       
        while(mes == aux.getMonth() ){
            result.push(aux.getDate())
            aux.setDate(aux.getDate() + 1 )
        }

        return result;
    }

    siguiente(div){
        this.dia.setMonth(this.dia.getMonth()+1,1);
        div.innerHTML = ""
        let tabla = document.createElement("table");
        tabla.setAttribute("id", "table-calendario");
        div.appendChild(this.armarCalendario(tabla));
        this.table = tabla;
    }

    anterior(div){
        this.dia.setMonth(this.dia.getMonth()-1,1);
        div.innerHTML = ""
        let tabla = document.createElement("table");
        tabla.setAttribute("id", "table-calendario");
        div.appendChild(this.armarCalendario(tabla));
        this.table = tabla;
    }

    generarCabecera(){
        let tr = document.createElement("tr")
        let td = document.createElement("td")
        td.innerHTML = `${this.meses[this.dia.getMonth()]}, ${this.dia.getFullYear()}`;
        td.setAttribute("colspan", 4);
        tr.appendChild(td)
        td = document.createElement("td")
        td.setAttribute("id", "content-button");
        td.setAttribute("colspan",3);
        let content = this.bottons
        if(!content){
            content = document.createElement("div")
            content.setAttribute("class", "button-calendario")

            let div = document.createElement("div")
            div.innerHTML = "<";
            content.appendChild(div);

            div = document.createElement("div")
            div.innerHTML = ">";
            content.appendChild(div);
            this.bottons = content;
        }else{
            content = this.bottons;
        }
        
        td.appendChild(content);
        
        tr.appendChild(td)
        return tr;
    }

    generarDiasCabecera(){
        let tr = document.createElement("tr")

        this.dias.forEach(element => {
            let td = document.createElement("td")
            td.innerHTML = element
            tr.appendChild(td)
        })

        return tr
    }

    armarCalendario(tabla){
        let ano = this.dia.getFullYear();
        let mes = this.dia.getMonth();
        let primer = new Date(ano, mes, 1).getDay()
        let dias = this.obtenerFechas(ano, mes)
        let x = 0;
        
        tabla.appendChild(this.generarCabecera())
        tabla.appendChild(this.generarDiasCabecera())
        for(let i = 0; i < 5; i++){

            let tr = document.createElement("tr")
            if(i <= 0){
                for(let j = 0; j < primer; j++){
                    let td = document.createElement("td")
                    td.innerHTML = ""
                    tr.appendChild(td)
                }

                for(let j = 0; j < 7 - primer; j++){
                    let td = document.createElement("td")
                    td.innerHTML = dias[x]
                    x++;
                    tr.appendChild(td)
    
                }
            }else{
                for(let j = 0; j < 7; j++){
                    let td = document.createElement("td")
                    td.innerHTML = dias[x] || ""
                    x++;
                    tr.appendChild(td)
                }
            }
            tabla.appendChild(tr)
        }
        return tabla
    }

    generarHoja(){
        
        return this.armarCalendario(this.table); 

    }

}