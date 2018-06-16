// Enemies our player must avoid
class Enemy {
  constructor(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
  }
  // Update the enemy's position, required method for game
  // Parameter: dt, a time delta between ticks
  update(dt) {
    this.render();
    this.x = this.x + this.speed*dt;
    if (this.x > 500) {
      this.x = -100;
      this.speed = this.speed + Math.floor(Math.random()*10);
    }
    //collision check
    if ((player.x < this.x + 60 && player.x + 60 > this.x) && (player.y < this.y + 50 && player.y + 50 > this.y)) {
      alert("Oops! You got caught! Try again.");
      player.x = 200;
      player.y = 400;
    }
  }
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
}
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.sprite = 'images/char-boy.png';
  }
  update(dt) {

  }

  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }

  handleInput(keyPress) {
    if (keyPress == 'up' && this.y > 0) {
      this.y -= 85;
    }
    if (keyPress == 'down' && this.y < 400) {
      this.y += 85;
    }
    if (keyPress == 'left' && this.x > 0) {
      this.x -= 100;
    }
    if (keyPress == 'right' && this.x < 400) {
      this.x += 100;
    }
    if (this.y == -25) {
      alert("You won the game!");
      this.x = 200;
      this.y = 400;
    }
}
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var allEnemies = [];
var enemy1 = new Enemy(0, 50, 230);
var enemy2 = new Enemy(230, 50, 200);
var enemy3 = new Enemy(0, 135, 150);
allEnemies.push(enemy1);
allEnemies.push(enemy2);
allEnemies.push(enemy3);
// Place the player object in a variable called player
var player = new Player(200, 400);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
