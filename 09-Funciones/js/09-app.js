

const reproductor = {
    reproducir: function(nombre = 'Autor Desconocido'){
        console.log(`Reproduciendo cancion...${nombre}`)
    },
    pausar: function(){
        console.log('Reproductor en pausa...')
    },
    borrar:function(nombre){
        console.log(`Borrando cancion ${nombre}`)
    },
    crearPlaylist:function(playlist){
        console.log(`Creando playlist...${playlist}`)
    },
    reproducirPlaylist:function(playlist){
        console.log(`Escuchando playlist...${playlist}`)

    }
}

reproductor.reproducir('Maxi Trusso')
reproductor.pausar()
reproductor.crearPlaylist('duki')
reportError.reproducirPlaylist('Maxi Trusso')
