export default function conversorkl(letra, valor){
  const kilogramo = 0.453592 //valor de una libra en kilogramos
  const libra = 2.20462 //valor de un kilogramo en libra
  if(letra=="k"){
    return parseFloat((valor * kilogramo).toFixed(2))
  }else{
    if(letra=="l"){
        return parseFloat((valor * libra).toFixed(2))
    }else{
      return console.log(`La letra ${letra} no es ni k(kilogramo) ni l(libra)`)
    }
  }

}
