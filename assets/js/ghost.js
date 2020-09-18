class Ghost extends Phaser.Physics.Arcade.Sprite {
    constructor(config) {
      super(config.scene, config.x, config.y, "atlas", "1_26.png");
      config.scene.add.existing(this);
      config.scene.physics.add.existing(this);
      this.setScale(0.3).setVelocityY(velY);
    }}

export function ghostMov() {
    random = Phaser.Math.Between(0, 2);
    if (velY == 100) {
      if (random == 0) {
        velY = -100;
        ghost.setVelocityY(velY).setTexture("atlas", "1_26.png");
      } else if (random == 1) {
        velY = 0;
        velX = 100;
        ghost.setVelocityX(velX).setTexture("atlas", "1_23.png");
      } else if (random == 2) {
        velY = 0;
        velX = -100;
        ghost.setVelocityX(velX).setTexture("atlas", "1_24.png");
      }
    } else if (velY == -100) {
      if (random == 0) {
        velY = 100;
        ghost.setVelocityY(velY).setTexture("atlas", "1_25.png");
      } else if (random == 1) {
        velY = 0;
        velX = 100;
        ghost.setVelocityX(velX).setTexture("atlas", "1_23.png");
      } else if (random == 2) {
        velY = 0;
        velX = -100;
        ghost.setVelocityX(velX).setTexture("atlas", "1_24.png");
      }
    } else if (velX == 100) {
      if (random == 0) {
        velX = -100;
        ghost.setVelocityX(velX).setTexture("atlas", "1_24.png");
      } else if (random == 1) {
        velX = 0;
        velY = 100;
        ghost.setVelocityY(velY).setTexture("atlas", "1_25.png");
      } else if (random == 2) {
        velX = 0;
        velY = -100;
        ghost.setVelocityY(velY).setTexture("atlas", "1_26.png");
      }
    } else if ((velX = -100)) {
      if (random == 0) {
        velX = 100;
        ghost.setVelocityX(velX).setTexture("atlas", "1_23.png");
      } else if (random == 1) {
        velX = 0;
        velY = 100;
        ghost.setVelocityY(velY).setTexture("atlas", "1_25.png");
      } else if (random == 2) {
        velX = 0;
        velY = -100;
        ghost.setVelocityY(velY).setTexture("atlas", "1_26.png");
    }
  }
}
export default Ghost;