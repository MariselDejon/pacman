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
    } else {
      solidos = mapa
        .createStaticLayer("solidos2", tilesets, 100, 0)
        .setCollisionByProperty({ solido: true });
    }

    //creación de botón que redirige al menú principal.
    this.add
      .image(50, 50, "atlas", "1_22.png")
      .setScale(1.1)
      .setInteractive()
      .on("pointerdown", () => this.scene.start("main"));

    //creación del personaje.
    player = this.physics.add
      .sprite(140, 40, "atlas", "1_8.png")
      .setSize(515, 515)
      .setScale(0.065)
      .setCollideWorldBounds(true);

    //creación de colliders entre el personaje y el mapa.
    this.physics.add.collider(player, solidos);

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
  }

  update() {
    //condición que permite el movimiento y velocidad del personaje según el cursor presionado.
    if (cursors.left.isDown) {
      player.setVelocityX(-100);

      player.anims.play("left", true);
    } else if (cursors.right.isDown) {
      player.setVelocityX(100);

      player.anims.play("right", true);
    } else {
      player.setVelocityX(0);
    }

    if (cursors.down.isDown) {
      player.setVelocityY(100);

      player.anims.play("down", true);
    } else if (cursors.up.isDown) {
      player.setVelocityY(-100);

      player.anims.play("up", true);
    } else {
      player.setVelocityY(0);
    }
  }
}
