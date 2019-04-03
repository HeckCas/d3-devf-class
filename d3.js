
                        /// Code de Ejemplo1 /// 
    // Select y SelectAll
    // d3.select('#example1')
    // const parrafo = d3.selectAll('#example1 p');
    // parrafo.style('color', 'red')
    // parrafo.attr('class', 'circle');
    // d3.selectAll('#example2 p:nth-child(2)')
    //  .style('font-size', (Math.random() * 440) + 'px');
    // console.log(parrafo);

                        ///Code de Ejemplo 2 ///
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

                    //Ejemplo 5

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
