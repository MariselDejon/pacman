import scene1 from "./scene1.js";
import scene2 from "./scene2.js";
import scene3 from "./scene3.js";

//definición y configuración de la variable más importante del juego.
var config = {
  type: Phaser.AUTO,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH, //centramos el juego a la mitad de la ventana del navegador.
    width: 900, //ancho de la pantalla.
    height: 600, //alto de la pantalla.
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
game = new Phaser.Game(config);