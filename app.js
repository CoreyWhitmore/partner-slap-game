let nameArray = ["John", "Mike", "Lewis", "Luke", "Nathan","Kholgan", "Grug","Hunter","Darius","Tezzert","Gideon", "Amber", "Sarah","Julie"];

let items ={
    trainingSword:{
        name: "Training Sword",
        modifier: 2,
        rarity: "common",
        type: "weapon"
    },



}

let player = {
strength: 1,
hits: 0,
knockouts: 0,
equipedWeapon: items.trainingSword,
}

let enemy = {
health: 50,
maxHealth: 50,
name: "Bob"
}


function nameGenerator(){
    let random = Math.floor(Math.random()*(nameArray.length-.001))
    enemy.name = nameArray[random]
}

function slap() {
    damage(1)
    player.hits++
    update()
}

function punch() {
    damage(5)
    player.hits++
    update()
    document.getElementById("punchButton").setAttribute("disabled", "")
    setTimeout(() => {
        document.getElementById("punchButton").removeAttribute("disabled")
    }, 1000);

}

function kick() {
    damage(player.strength)
    player.hits++
    update()
    document.getElementById("kickButton").setAttribute("disabled", "")
    setTimeout(() => {
        document.getElementById("kickButton").removeAttribute("disabled")
    }, 2000);
}

function lift(){
    player.strength++
    update()
}

function damage(number){
    enemy.health -= number*player.strength*player.equipedWeapon.modifier
}

function respawn(){
    player.knockouts++
    enemy.maxHealth = 100* (player.knockouts)
    enemy.health = enemy.maxHealth
    nameGenerator()
    update()
}

function unlocks(){
    if(player.strength == 5){
        document.getElementById("punchButton").removeAttribute("disabled")
    }
    if(player.strength == 10){
        document.getElementById("kickButton").removeAttribute("disabled")
    }
    if(player.knockouts>=1){
        document.getElementById("liftButton").removeAttribute("disabled")
    }
}

function drawHealth(){
    let healthPercent = (enemy.health/enemy.maxHealth)*100 
    document.getElementById("healthbar").setAttribute("style",`width:${healthPercent}%`)
}

function update() {
    document.getElementById("health").innerText = enemy.health.toString()
    document.getElementById("enemyName").innerText = enemy.name
    document.getElementById("hits").innerText = player.hits.toString()
    document.getElementById("knockouts").innerText = player.knockouts.toString()
    document.getElementById("strength").innerText = player.strength.toString()
    drawHealth()
    unlocks()
    if(enemy.health <= 0){
        respawn()
    }
}
nameGenerator()
update()