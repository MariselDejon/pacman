class Pacman extends Phaser.Physics.Arcade.Sprite {
  constructor(config) {
    super(config.scene, config.x, config.y, "atlas", "1_8.png");
    config.scene.add.existing(this);
    config.scene.physics.add.existing(this);
    this.scene.events.on("update", this.update, this);
    this.setSize(515, 515).setScale(0.05).setCollideWorldBounds(true);
  }

  update() {
    //condición que permite el movimiento y velocidad del personaje según el cursor presionado.
    if (cursors.left.isDown && cursors.up.isDown) {
      player.anims.play("left", true).setVelocityX(-90).setVelocityY(-90);
    } else if (cursors.left.isDown && cursors.down.isDown) {
      player.anims.play("left", true).setVelocityX(-90).setVelocityY(90);
    } else if (cursors.right.isDown && cursors.up.isDown) {
      player.anims.play("right", true).setVelocityX(90).setVelocityY(-90);
    } else if (cursors.right.isDown && cursors.down.isDown) {
      player.anims.play("right", true).setVelocityX(90).setVelocityY(90);
    } else if (cursors.left.isDown) {
      player.setVelocityX(-100).anims.play("left", true);
    } else if (cursors.right.isDown) {
      player.setVelocityX(100).anims.play("right", true);
    } else {
      player.setVelocityX(0);
    }

    if (cursors.left.isDown && cursors.up.isDown) {
      player.anims.play("left", true).setVelocityX(-90).setVelocityY(-90);
    } else if (cursors.left.isDown && cursors.down.isDown) {
      player.anims.play("left", true).setVelocityX(-90).setVelocityY(90);
    } else if (cursors.right.isDown && cursors.up.isDown) {
      player.anims.play("right", true).setVelocityX(90).setVelocityY(-90);
    } else if (cursors.right.isDown && cursors.down.isDown) {
      player.anims.play("right", true).setVelocityX(90).setVelocityY(90);
    } else if (cursors.down.isDown) {
      player.setVelocityY(100).anims.play("down", true);
    } else if (cursors.up.isDown) {
      player.setVelocityY(-100).anims.play("up", true);
    } else {
      player.setVelocityY(0);
    }
  }
}
export default Pacman;
