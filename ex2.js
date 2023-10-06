/**
 * Que sucede aquí?
 */

 let variable1 = 1;
 let variable2 = 2;
 let variable3 = 3;
 let variable4 = 4;
 variable2= 2;
 varialbe3= 4;
 variable4= 1;
 variable1= -7;

 /**
  * En este punto, que valor tendrá 'variable4'. ¿Por qué? ¿Cómo podrías comprobarlo?
  */

  variable2 = variable1;
  variable4 = variable2 * 2;

  console.log(variable4); /* El resultado por terminal nos muestra:  -14 de la operación con los nuevos valores:
  El nuevo valor de la variable2 = -7 --> Inicialmente la variable1 = 1 pero hay una segunda declaración de variable1 con el valor -7. Vale el último valor de la última declaración
  El nuevo valor de la variable4 = -7 * 2 -- > 2 * (-7) --> Resultado --> -7
  - Con el console.log(); muestro el resultado por la terminal
  */

/**
  * En este punto, que valor tendrá 'variable4'. ¿Por qué? ¿Cómo podrías comprobarlo?
  */