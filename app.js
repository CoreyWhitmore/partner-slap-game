let nameArray = ["John", "Mike", "Lewis", "Luke", "Nathan", "Kholgan", "Grug", "Hunter", "Darius", "Tezzert", "Gideon", "Amber", "Sarah", "Julie"];

let items = {
    trainingSword: {
        name: "Training Sword",
        modifier: 1,
        rarity: "dirt",
        type: "weapon"
    },
    copperSword:{
        name: "Copper Sword",
        modifier: 2,
        rarity: "common",
        type: "weapon"
    },
    ironSword:{
        name: "Iron Sword",
        modifier: 3,
        rarity: "uncommon",
        type: "weapon"
    },
    steelSword:{
        name: "Steel Sword",
        modifier: 4,
        rarity: "rare",
        type: "weapon"
    },
    miythrilSword:{
        name: "Mythril Sword",
        modifier: 5,
        rarity: "legendary",
        type: "weapon"
    },


}

let player = {
strength: 1,
hits: 0,
dexterity: 1,
knockouts: 0,
inventory: {
    weapon: items.trainingSword
},
}

let enemy = {
    health: 50,
    maxHealth: 50,
    name: "Bob"
}


function nameGenerator() {
    let random = Math.floor(Math.random() * (nameArray.length - .001))
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
    }, (10000/(10+player.dexterity)));

}

function kick() {
    damage(player.strength)
    player.hits++
    update()
    document.getElementById("kickButton").setAttribute("disabled", "")
    setTimeout(() => {
        document.getElementById("kickButton").removeAttribute("disabled")
    }, (40000/(10+player.dexterity)));
}

function lift() {
    player.strength++
    update()
}

function jog() {
    player.dexterity++
    update()
}

function devKill(){
    damage(enemy.maxHealth)
    update()
}

function damage(number){
    enemy.health -= number*player.strength*player.inventory.weapon.modifier
}

function respawn() {
    player.knockouts++
    enemy.maxHealth = 100 * (player.knockouts)
    enemy.health = enemy.maxHealth
    nameGenerator()
    update()
}

function unlocks() {
    if (player.strength == 5) {
        document.getElementById("punchButton").removeAttribute("disabled")
    }
    if (player.strength == 10) {
        document.getElementById("kickButton").removeAttribute("disabled")
    }
    if (player.knockouts >= 1) {
        document.getElementById("liftButton").removeAttribute("disabled")
    }
    if (player.knockouts >= 5) {
        document.getElementById("jogButton").removeAttribute("disabled")
    }
}

function drawHealth() {
    let healthPercent = (enemy.health / enemy.maxHealth) * 100
    document.getElementById("healthbar").setAttribute("style", `width:${healthPercent}%`)
}

function drawItems(){
   const item = player.inventory
    document.getElementById("weapon").innerText = item.weapon.name + ` (${item.weapon.modifier})` || "none"
}

function lottery(){
    let luck = Math.floor(Math.random()*100)
    let droppedItem
    if(luck <= 50){
        droppedItem = player.inventory.weapon
        console.log("No Drop")
    }
    else if(luck < 75){
        droppedItem = items.copperSword
        console.log(droppedItem.name)
    }
    else if(luck < 89){
        droppedItem = items.ironSword
        console.log(droppedItem.name)
    }
    else if(luck < 97){
        droppedItem = items.steelSword
        console.log(droppedItem.name)
    }
    else if(luck < 100){
        droppedItem = items.miythrilSword
        console.log(droppedItem.name)
    }
    
    if(droppedItem.modifier > player.inventory.weapon.modifier){
        player.inventory.weapon = droppedItem
    }
}

function update() {
    document.getElementById("health").innerText = enemy.health.toString()
    document.getElementById("enemyName").innerText = enemy.name
    document.getElementById("hits").innerText = player.hits.toString()
    document.getElementById("knockouts").innerText = player.knockouts.toString()
    document.getElementById("strength").innerText = player.strength.toString()
    document.getElementById("dexterity").innerText = player.dexterity.toString()
    drawHealth()
    unlocks()
    drawItems()
    if(enemy.health <= 0){
        lottery()
        respawn()
    }
}
nameGenerator()
update()