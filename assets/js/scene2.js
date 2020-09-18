class scene2 extends Phaser.Scene {
  constructor() {
    super("levels");
  }
  //creación del menú de selección de niveles.
  create() {
    this.add.image(450, 300, "atlas", "1_17.png");
    this.add
      .image(100, 225, "atlas", "1_20.png")
      .setInteractive()
      .on("pointerdown", () => {
        level = 1;
        this.scene.start("game");
      });
    this.add
      .image(210, 225, "atlas", "1_21.png")
      .setInteractive()
      .on("pointerdown", () => {
        level = 2;
        this.scene.start("game");
      });
    //la variable "level" adquiere un valor de 1 o 2, dependiendo el botón que se cliquee.
    this.add
      .image(40, 40, "atlas", "1_22.png")
      .setInteractive()
      .on("pointerdown", () => this.scene.start("main"));
  }
}
export default scene2;
