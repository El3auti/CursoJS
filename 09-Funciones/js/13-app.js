const reproductor = {
    reproducir: (nombre = 'Autor Desconocido') => console.log(`Reproduciendo cancion...${nombre}`),
    pausar: () => console.log('Reproductor en pausa...'),
    borrar: nombre => console.log(`Borrando cancion ${nombre}`),
    crearPlaylist: playlist => console.log(`Creando playlist...${playlist}`),
    reproducirPlaylist: playlist => console.log(`Escuchando playlist...${playlist}`)
}

reproductor.reproducir('Maxi Trusso')
reproductor.pausar()
reproductor.crearPlaylist('duki')
reproductor.reproducirPlaylist('duko')