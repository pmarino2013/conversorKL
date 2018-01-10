const expect = require('chai').expect
const conversorkl = require('..').default

describe('#conversorkl', function(){
  it('Si la letra es "k" se convierte de libra a kilogramo',function(){
    const convertir=conversorkl("k", 300)
    expect(convertir).to.equal(136.08)
  })
  it('Si la letra es "l" se convierte de libra a kilogramo',function(){
    const convertir=conversorkl("l", 4)
    expect(convertir).to.equal(8.82)

  })
  /*it('Si la letra no es ni "k" ni "l" muestra mensaje de error',function(){
    const convertir=conversorkl("r", 4)
    expect(convertir).to.equal("La letra r no es ni k(kilogramo) ni l(libra)")
  })*/
})
