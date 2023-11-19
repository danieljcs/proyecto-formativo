class perro {
constructor(nombre, color){
    this.nombre_perro= nombre 
    this.color= color;


    this.ladrar = function(){
        console.log(`${this.nombre_perro} no conocido gua gua`)
    }


}

}
const ladridos = new perro('timoteo' ,'negro')

ladridos.ladrar()