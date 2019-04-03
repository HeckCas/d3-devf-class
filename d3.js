
                        /// Ejemplo1 /// 
    // Select y SelectAll
    // d3.select('#example1')
    // const parrafo = d3.selectAll('#example1 p');
    // parrafo.style('color', 'red')
    // parrafo.attr('class', 'circle');
    // d3.selectAll('#example2 p:nth-child(2)')
    //  .style('font-size', (Math.random() * 440) + 'px');
    // console.log(parrafo);

                        /// Ejemplo 2 ///
    // Valores dinamicos para cada uno de los elementos (callbacks)
    // // Iteracion con d3
    // d3.selectAll('#example2 p')
    // .each(function(d) {
    //   d3.select(this).style('font-size', (Math.random() * 440) + 'px');
    // });

    // d3.selectAll('#example2 p')
    //   .style('font-size', function(d,i) {
    //     if( i == 0 ) { return (Math.random() * 220)+'px' }
    //   })

                            /// Ejemplo 3  ///
    // const data = ['Parrafo A', 'Párrafo B', 'Párrafo C', 'Párrafo D'];
    // d3.select('#example3')
    //   .selectAll('p')
    //   .data(data)
    //   // .text(d => d)
    //   .enter()
    //   .append('p')
    //   .text(d => d);

                            /// Ejmeplo 4 ///
    // const data2 = ['Parrafo A', 'Párrafo C', 'Párrafo D', 'Párrafo E', 'Párrafo F'];
    // const selection = d3.select('#example4 .panel-body')
    //   .selectAll('p')
    //   .data(data2);
    // console.log(selection);

    // // UPDATE
    // selection
    //   .text(d => d);

    // // ENTER
    // selection
    //   .enter()
    //   .append('p')
    //   .text(d => d);

    // // EXIT
    // selection
    //   .exit()
    //   .remove();

      // Usar la subselección .enter()
      // Agregar un nuevo div usando .append('div')

                  /// Ejemplo 5  ///

      // const datados = [30, 50, 80, 120, 150];
      // d3.select('#example5')
      //   .selectAll('div')
      //   .data(datados, d => d)
      //   .enter()
      //   .append('div')
      //   .style('background', 'steelblue')
      //   .style('margin', '5px')
      //   .style('width', d => d + 'px')
      //   .style('height', '30px');

              /// Ejemplo Barchart ///
// Nuestra primera grafiquita
// let  defunciones = 
// [
//   {Defunciones: 12234},
//   {Defunciones: 9280},
//   {Defunciones: 9461},
//   {Defunciones: 7685},
//   {Defunciones: 3092},
//   {Defunciones: 2749},
//   {Defunciones: 926},
//   {Defunciones: 2402},
//   {Defunciones: 1839},
//   {Defunciones: 1714},
//   {Defunciones: 881},
//   {Defunciones: 1093},
//   {Defunciones: 897},
//   {Defunciones: 9544} 
// ]
// defunciones.sort(( a, b ) => b.Defunciones - a.Defunciones);
// d3.select('#chart-bar')
// .selectAll('div')
// .data(defunciones)
// .enter()
// .append('div')
// .style('width', d => d.Defunciones / 20 + 'px')
// .style('background-color', 'yellowgreen')
// .style('margin-bottom', '3px')
// .style('padding', '1px')
// .style('color', '#1E2D3A')
// .style('font-size', '15px')
// .text(d => d.Defunciones);
// y si nos pasan datos por un csv?

                  /// Ejemplo de BarChart con CSV ///

  // d3.csv('./CausasDeMortalidadDF2013.csv', (data2) => {
  //   return {
  //       Defunciones: +data2.Defunciones
  //     };
  //   })
  //   .then(data2 => {
  //     debugger;
  //     data2.sort(( a, b ) => a.Defunciones - b.Defunciones);
  //     d3.select('#chart-bar')
  //     .selectAll('div')
  //     .data(data2)
  //     .enter()
  //     .append('div')
  //     .style('width', d => d.Defunciones / 20 + 'px')
  //     .style('background-color', 'yellowgreen')
  //     .style('margin-bottom', '3px')
  //     .style('padding', '1px')
  //     .text(d => d.Defunciones);
  //   });