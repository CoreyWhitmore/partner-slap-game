let health = 50
let maxHealth = 50
let hits = 0
let knockouts = 0
let strength = 5
let enemyName = "Bob"
let nameArray = ["John", "Mike", "Lewis", "Luke", "Nathan","Kholgan", "Grug","Hunter","Darius","Tezzert","Gideon", "Amber", "Sarah","Julie"];

function nameGenerator(){
    let random = Math.floor(Math.random()*(nameArray.length-.001))
    enemyName = nameArray[random]
}

function slap() {
    health -= strength
    hits++
    update()
}

function punch() {
    health -= 5*strength
    hits++
    update()
    document.getElementById("punchButton").setAttribute("disabled", "")
    setTimeout(() => {
        document.getElementById("punchButton").removeAttribute("disabled")
    }, 1000);

}

function kick() {
    health -= strength*strength
    hits++
    update()
    document.getElementById("kickButton").setAttribute("disabled", "")
    setTimeout(() => {
        document.getElementById("kickButton").removeAttribute("disabled")
    }, 2000);
}

function lift(){
    strength++
    update()
}

function respawn(){
    knockouts++
    maxHealth = 100* (knockouts)
    health = maxHealth
    nameGenerator()
    update()
}

function unlocks(){
    if(strength == 5){
        document.getElementById("punchButton").removeAttribute("disabled")
    }
    if(strength == 10){
        document.getElementById("kickButton").removeAttribute("disabled")
    }
    if(knockouts>=1){
        document.getElementById("liftButton").removeAttribute("disabled")
    }
}

function drawHealth(){
    let healthPercent = (health/maxHealth)*100 
    document.getElementById("healthbar").setAttribute("style",`width:${healthPercent}%`)
}

function update() {
    document.getElementById("health").innerText = health.toString()
    document.getElementById("enemyName").innerText = enemyName
    document.getElementById("hits").innerText = hits.toString()
    document.getElementById("knockouts").innerText = knockouts.toString()
    document.getElementById("strength").innerText = strength.toString()
    drawHealth()
    unlocks()
    if(health <= 0){
        respawn()
    }
}
nameGenerator()
update()