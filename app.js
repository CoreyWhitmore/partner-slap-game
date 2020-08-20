let nameArray = ["John", "Mike", "Lewis", "Luke", "Nathan","Kholgan", "Grug","Hunter","Darius","Tezzert","Gideon", "Amber", "Sarah","Julie"];

let player = {
strength: 5,
hits: 0,
knockouts: 0,

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
    enemy.health -= player.strength
    player.hits++
    update()
}

function punch() {
    enemy.health -= 5*player.strength
    player.hits++
    update()
    document.getElementById("punchButton").setAttribute("disabled", "")
    setTimeout(() => {
        document.getElementById("punchButton").removeAttribute("disabled")
    }, 1000);

}

function kick() {
    enemy.health -= player.strength*player.strength
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