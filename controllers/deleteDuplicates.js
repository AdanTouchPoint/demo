function  eliminarDuplicadosPorEmail(arrayObjetos) {
    // Paso 1: Identificar los objetos duplicados
    const correosVistos = {};
    const objetosDuplicados = [];
  
    arrayObjetos.forEach((objeto) => {
      const email = objeto.email;
      if (correosVistos[email]) {
        objetosDuplicados.push(objeto);
      } else {
        correosVistos[email] = true;
      }
    });
  
    // Paso 2: Filtrar el array original
    const arrayFiltrado = arrayObjetos.filter(
      (objeto) => !objetosDuplicados.includes(objeto)
    );
  
    return arrayFiltrado;
  }
  function  eliminarDuplicadosPorDivision(arrayObjetos) {
    // Paso 1: Identificar los objetos con propiedad "division"
    const correosVistos = {};
    const objetosDuplicados = [];
    let objetosConDivision = arrayObjetos.filter(objeto => objeto.hasOwnProperty('division'));
     // Paso 2: Identificar los objetos duplicados"
    objetosConDivision.forEach((objeto) => {
      const division = objeto.division;
      if (correosVistos[division]) {
        objetosDuplicados.push(objeto);
      } else {
        correosVistos[division] = true;
      }
    });
  
    // Paso 3: Filtrar el array original
    const arrayFiltrado = objetosConDivision.filter(
      (objeto) => !objetosDuplicados.includes(objeto)
    );
  
    return arrayFiltrado;
  }
  
   

  module.exports={eliminarDuplicadosPorEmail, eliminarDuplicadosPorDivision}