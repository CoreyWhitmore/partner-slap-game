let health = 100
let enemyName = "Bob"
let hits = 0
let nameArray = ["John", "Mike", "Lewis", "Luke", "Nathan","Kholgan", "Grug","Hunter","Darius","Tezzert","Gideon", "Amber", "Sarah","Julie"];
let knockouts = 0
let strength = 2

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
}

function kick() {
    health -= 10*strength
    hits++
    update()
}

function lift(){
    strength++
    update()
}

function respawn(){
    knockouts++
    health = 100* (knockouts+1)
    nameGenerator()
    update()
}

function update() {
    document.getElementById("health").innerText = health.toString()
    document.getElementById("enemyName").innerText = enemyName
    document.getElementById("hits").innerText = hits.toString()
    document.getElementById("knockouts").innerText = knockouts.toString()
    document.getElementById("strength").innerText = strength.toString()
    if(health <= 0){
        respawn()
    }
}
nameGenerator()
update()