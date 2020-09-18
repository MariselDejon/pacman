import Pacman from "./pacman.js";
import Ghost from "./ghost.js";
import {ghostMov} from "./ghost.js";

class scene3 extends Phaser.Scene {
  constructor() {
    super("game");
  }

  create() {
    //creación y cambio de color de fondo del mapa.
    game.config.backgroundColor.setTo(0, 0, 0);
    mapa = this.make.tilemap({ key: "mapa" });
    tilesets = mapa.addTilesetImage("TileSets", "tiles");

    //condición que permite crear el mapa del nivel 1 o 2.
    if (level == 1) {
      solidos = mapa
        .createStaticLayer("solidos", tilesets, 100, 0)
        .setCollisionByProperty({ solido: true });
      dinamicos = mapa.createDynamicLayer("dinamicos", tilesets, 100, 0);
    } else {
      solidos = mapa
        .createStaticLayer("solidos2", tilesets, 100, 0)
        .setCollisionByProperty({ solido: true });
      dinamicos = mapa.createDynamicLayer("dinamicos2", tilesets, 100, 0);
    }

    //creación de botón que redirige al menú principal.
    this.add
      .image(50, 50, "atlas", "1_22.png")
      .setScale(1.1)
      .setInteractive()
      .on("pointerdown", () => {points = 0; this.scene.start("main")});

    //creación del personaje.
    player = new Pacman({scene: this, x: 140, y: 40});

    ghost = new Ghost({scene: this, x: 500, y: 300});

    this.add.text(17, 230, "score: ", {
      fill: "white",
      font: "20px Consolas",
   });
    score = this.add.text(17, 265, points, {
    fill: "white",
    font: "20px Consolas",
    });

    //creación de colliders entre el personaje y el mapa.
    this.physics.add.collider(player, solidos);
    this.physics.add.overlap(player, dinamicos);
    this.physics.add.collider(ghost, solidos, ghostMov, null, this);
    this.physics.add.collider(player, ghost, () => {points = 0; velY = -100; velX = 0; this.scene.start("main")}, null, this);

    //creación de las animaciones del personaje.
    this.anims.create({
      key: "down",
      frames: this.anims.generateFrameNames("atlas", {
        start: 0,
        end: 3,
        prefix: "1_",
        suffix: ".png",
      }),
      framerate: 5,
      repeat: 0,
    });

    this.anims.create({
      key: "up",
      frames: this.anims.generateFrameNames("atlas", {
        start: 4,
        end: 7,
        prefix: "1_",
        suffix: ".png",
      }),
      framerate: 5,
      repeat: 0,
    });

    this.anims.create({
      key: "right",
      frames: this.anims.generateFrameNames("atlas", {
        start: 8,
        end: 11,
        prefix: "1_",
        suffix: ".png",
      }),
      framerate: 5,
      repeat: 0,
    });

    this.anims.create({
      key: "left",
      frames: this.anims.generateFrameNames("atlas", {
        start: 12,
        end: 15,
        prefix: "1_",
        suffix: ".png",
      }),
      framerate: 5,
      repeat: 0,
    });

    //creación de controles.
    cursors = this.input.keyboard.createCursorKeys();

    dinamicos.setTileIndexCallback(5, this.collect, this).setTileIndexCallback(13, this.collect2, this).setTileIndexCallback(14, this.collect3, this);
  }

  collect(sprite, tile) {
    points += 10;
    dinamicos.removeTileAt(tile.x, tile.y);
    this.text();
  }

  collect2(sprite, tile) {
    points += 100;
    dinamicos.removeTileAt(tile.x, tile.y);
    this.text();
  }

  collect3(sprite, tile) {
    points += 200;
    dinamicos.removeTileAt(tile.x, tile.y);
    this.text();
  }

  text() {
    score.setText(points);
    if (points == 4110 && level == 1) {
      points = 0;
      alert("¡Ganaste!");
      this.scene.start("main");
    } else if (points == 4450) {
      points = 0;
      alert("¡Ganaste!");
      this.scene.start("main");
    }
  }
}
export default scene3;