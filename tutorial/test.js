var ship = {
    manufacture: function (shields) {
        var newShip = Object.create(this);
        newShip.shields = shields;
        console.log('Shields: ' + shields);       
        console.log('Health: ' + newShip.health);
        return newShip;
    },
    maxHealth: 150,
    health: 150,
    shields: 50,
    guns: [{
            damage: 20,
            speed: 5
        }, {
            damage: 5,
            speed: 9000
        }],
    fire: function () {
        console.log('PEW PEW');
    },
    damage: function (hit) {
        if (hit == undefined)
            return;
        if (this.health - hit <= 0) {
            console.log("I'm dead");
            this.health = 0;
        } else {
            this.health = this.health - hit;
            console.log("Remaining health: " + this.health);
        }
    },
    revive: function () {
        this.health = Math.floor(this.maxHealth / 2);
        console.log("Remaining health: " + this.health);
    }
};

var myWayMoreAwesomeShip = ship.manufacture(150);
myWayMoreAwesomeShip.fire();
myWayMoreAwesomeShip.damage(8);
myWayMoreAwesomeShip.revive(8);
myWayMoreAwesomeShip.damage(8);
