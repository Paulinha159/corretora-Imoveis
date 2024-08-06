const prompt = require ("prompt-sync")();

const db =[];

let proxId = 1 ;

const model = (id = proxId++ ) => {
    const nome = prompt ("Nome: ");

    if (nome != ""){
        return {
            id,
            nome,
        }
    }

    console.log ("Dados inválidos")
};

const criar = () =>{
    const novo = model






}

const index = () =>{
    if (db.length ==0){
        console.log("Nenhum parametro encontrado")
    } else {
 db.forEach(el => console.log(el))
 return true
}
}
const show = id =>db.find(el=> el.id == id);

const update = () =>{
    if(index()){
        const id = parseInt(prompt("ID: "));
     const indice = db. findIndex( el => el.id == id) 
      if (indice != -1){
        const novo = model ( id );
        if(novo){
            db[indice]= novo;
            consol
        }
      }

    }

}