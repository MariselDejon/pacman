//definición y configuración de la variable más importante del juego.
var config = {
  type: Phaser.AUTO,
  width: 900,
  height: 600,
  scale: {
    autoCenter: Phaser.Scale.CENTER_BOTH, //ubicación del juego en el centro de la ventana del navegador.
  },
  physics: {
    default: "arcade", //tipo de físicas usadas.
    arcade: {
      gravity: { y: 0 },
      debug: false,
    },
  },
  scene: [scene1, scene2, scene3], //escenas que componen al juego.
};

//inicialización de phaser con los ajustes definidos anteriormente.
var game = new Phaser.Game(config);

//variables utilizadas en las demás escenas.
var player;
var mapa;
var tilesets;
var level;
var solidos;
var cursors;
