const lista = document.getElementById('lista');

Sortable.create(lista, {
    animation: 150,
    choseClass:"seleccionado",
    dragClass: "drag",
    onEnd:() =>{
        console.log('Inserto nuevo eleemento')
    },
    group:"lista-personas",
    store:{
        //Guardamos orden de la lista
        set: (sortable) => {
            const orden = sortable.toArray();
            localStorage.setItem(sortable.options.group.name, orden.join('|'));
            console.log(orden);
        },
        // Obtenemos el order de la lista 
        get: (sortable) => {
          const orden = localStorage.getItem(sortable.options.group.name);
          console.log(orden ? orden.split('|') : []);
          return orden ? orden.split('|') : [];
        }
    }
});

