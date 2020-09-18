class scene1 extends Phaser.Scene {
  constructor() {
    super("main");
  }
  //precarga de assets.
  preload() {
    this.load.image("tiles", "/assets/images/TileSets.png");
    this.load.tilemapTiledJSON("mapa", "/assets/json/mapa.json");
    this.load.atlas(
      "atlas",
      "assets/images/atlas.png",
      "assets/json/atlas.json"
    );
  }
  //creación del menú principal.
  create() {
    game.config.backgroundColor.setTo(0, 0, 0);
    this.add.image(450, 300, "atlas", "1_16.png");
    this.add
      .image(450, 310, "atlas", "1_18.png")
      .setInteractive()
      .on("pointerdown", () => this.scene.start("levels"));

    this.add
      .image(450, 380, "atlas", "1_19.png")
      .setInteractive()
      .on(
        "pointerdown",
        () => (window.location.href = "http://www.google.com")
      );
  }
}

export default scene1;
