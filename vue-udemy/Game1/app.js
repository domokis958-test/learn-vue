new Vue({
    el:'#app',
    data: {
        playerHealth:100,
        monsterHealth:100,
        gameIsRunning: false,
        turns: []
    },
    methods : {
        startGame() {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.turns = [];
        },
        attack() {
            var damage = this.calculateDamage(3, 10);
            this.monsterHealth = this.monsterHealth - damage;
            this.turns.unshift({
                isPlayer : true,
                text : 'Player hits monster for ' + damage
            });
            if (this.checkWin()) {
                return;
            }
            this.monsterAttacks();
        },
        specialAttack() {
            var damage = this.calculateDamage(10, 20);
            this.monsterHealth = this.monsterHealth - damage;
            this.turns.unshift({
                isPlayer : true,
                text : 'Player hits monster hard for ' + damage
            });
            if (this.checkWin()) {
                return;
            }
            this.monsterAttacks()
        },
        heal() {
            if (this.playerHealth <=90) {
                this.playerHealth += 10;
            } else {
                this.playerHealth = 100;
            }
            this.turns.unshift({
                isPlayer : true,
                text : 'Player heals ' 
            });            
            this.monsterAttacks();
            

        },
        giveUp() {
            this.gameIsRunning = false;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.turns = [];
        }, 
        calculateDamage(min, max) {
            var damage = Math.min(Math.floor((Math.random() * 10)) + 1, min);
            return damage;
        },
        checkWin() {
            if (this.monsterHealth <= 0) {
                if (confirm('You won. New game?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            } else {
                if (this.playerHealth <= 0) {
                    if (confirm('You Lost. New game?')) {
                        this.startGame();
                    } else {
                        this.gameIsRunning = false;
                    }
                    return true;
                }
            }
            return false;
        },
        monsterAttacks() {
            var damage = this.calculateDamage(5, 12);
            this.playerHealth = this.playerHealth - damage;
            this.checkWin();
            this.turns.unshift({
                isPlayer : false,
                text : 'Moster hits player for ' + damage
            });
        }
    }
})