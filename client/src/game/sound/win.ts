let winPlaying = false

const SOUND = new Audio(`${process.env.PUBLIC_URL}/sound/win/0.mp3`)

export function isWinPlaying () {
  return winPlaying
}

export function playWinSound (callback: () => void) {
  winPlaying = true

  const onEnd = () => {
    stopWinSound()
    winPlaying = false
    callback()
  }

  SOUND.currentTime = 0
  SOUND.onended = onEnd
  SOUND.onerror = onEnd
  SOUND.play().catch(() => {})
}

export function stopWinSound () {
  SOUND.onended = null
  SOUND.onerror = null
  SOUND.pause()
  SOUND.currentTime = 0
}


  /* if socket == event_id {
  "$GMObject":"",
  "%Name":"obj_explosao",
  "eventList":[
    {"$GMEvent":"","%Name":"","collisionObjectId":null,"eventNum":0,"eventType":3,"isDnD":false,"name":"","resourceType":"GMEvent","resourceVersion":"2.0",},
    {"$GMEvent":"","%Name":"","collisionObjectId":null,"eventNum":0,"eventType":0,"isDnD":false,"name":"","resourceType":"GMEvent","resourceVersion":"2.0",},
  ],
  {
  "$GMObject":"",
  "%Name":"obj_player",
  "eventList":[
    {"$GMEvent":"","%Name":"","collisionObjectId":null,"eventNum":0,"eventType":0,"isDnD":false,"name":"","resourceType":"GMEvent","resourceVersion":"2.0",},
    {"$GMEvent":"","%Name":"","collisionObjectId":null,"eventNum":0,"eventType":3,"isDnD":false,"name":"","resourceType":"GMEvent","resourceVersion":"2.0",},
  ],
  "managed":true,
  "name":"obj_player",
  "overriddenProperties":[],
  "parent":{
    "name":"player",
    "path":"folders/Objects/player.yy",
  },
  "parentObjectId":null,
  "persistent":false,
  "physicsAngularDamping":0.1,
  "physicsDensity":0.5,
  "physicsFriction":0.2,
  "physicsGroup":1,
  "physicsKinematic":false,
  "physicsLinearDamping":0.1,
  "physicsObject":false,
  "physicsRestitution":0.1,
  "physicsSensor":false,
  "physicsShape":1,
  "physicsShapePoints":[],
  "physicsStartAwake":true,
  "properties":[],
  "resourceType":"GMObject",
  "resourceVersion":"2.0",
  "solid":false,
  "spriteId":{
    "name":"spr_pro_idle_f",
    "path":"sprites/spr_pro_idle_f/spr_pro_idle_f.yy",
  },
  "spriteMaskId":{
    "name":"spr_player_idle_f",
    "path":"sprites/spr_player_idle_f/spr_player_idle_f.yy",
  },
  "visible":true,
}
  "resourceVersion":"2.0",
  "solid":false,
  "spriteId":{
    "name":"spr_explo_s_meio",
    "path":"sprites/spr_explo_s_meio/spr_explo_s_meio.yy",
  },
  "spriteMaskId":null,
  "visible":true,
}  antiga verificação de vitória, porém sem verificação ativa. apenas por varredura de blocos.*/