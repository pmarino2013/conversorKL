# Conversorkl

Conversorkl es un convertidor de pesos de Kilogramos a Libras y viceversa diseñado para el [Curso de fundamentos de Javascript] (https://platzi.com/js) de [Platzi] (https://platzi.com).

## Descripción
- Permite convertir las medidas de peso en kilogramos a libras y viceversa. El modulo recibe dos parametros, el primero es una letra entre comillas. La letra "k" representa kilogramos y la letra "l" libras. El segundo parámetro es el valor a convertir.
Ejemplo:
conversorkl("k", 500) convertir 500 libras a kilogramos
conversorkl("l", 4) convertir 4 kilogramos a libras
La letra representa a que tipo de peso quiero convertir y el numero representa el valor que deseo convertir.

## Instalación
```
npm install conversorkl
```
## Uso

```
import conversorkl from 'conversorkl'

conversorkl("k",300) // convertir 300 libras a kilogramos
conversorkl("l",4) // convertir 4 kilogramos a libras
conversorkl("r",500) //La letra r no es ni k(kilogramo) ni l(libra)

```

## Créditos
- [Pablo Marino]
(https://twitter.com/@pablomarino8)

##Licencia
[MIT] (https://opensource.org/licenses/MIT)
