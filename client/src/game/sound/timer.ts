import { Assets } from '~/game/util/assets'

const SOUND = new Audio(`${process.env.PUBLIC_URL}/sound/timer/0.mp3`)

export function playTimerSound (callback:()=>void) {
  const onEnd = () => {
    SOUND.onerror = null
    SOUND.onended = null
    if (Assets.bgSound) {
      Assets.bgSound.playbackRate = 1.1
      Assets.bgSound.volume = bgSoundVolume
    }
    callback()
  }
  SOUND.currentTime = 0
  SOUND.onerror = onEnd
  SOUND.onended = onEnd
  let bgSoundVolume:number
  if (Assets.bgSound) {
    bgSoundVolume = Assets.bgSound.volume
    Assets.bgSound.volume = bgSoundVolume * 0.5
  }
  SOUND.play().catch(()=>{})
}


/* if socket == event_id {

	var buff = async_load["buffer"]
	buffer_seek(buff, buffer_seek_start, 0)
	var cmd = buffer_read(buff, buffer_u8)
	
	switch (cmd){
	
	
	
	}

{
  "$GMObject":"",
  "%Name":"obj_explosao",
  "eventList":[
    {"$GMEvent":"","%Name":"","collisionObjectId":null,"eventNum":0,"eventType":3,"isDnD":false,"name":"","resourceType":"GMEvent","resourceVersion":"2.0",},
    {"$GMEvent":"","%Name":"","collisionObjectId":null,"eventNum":0,"eventType":0,"isDnD":false,"name":"","resourceType":"GMEvent","resourceVersion":"2.0",},
  ],
  "managed":true,
  "name":"obj_explosao",
  "overriddenProperties":[],
  "parent":{
    "name":"bombs",
    "path":"folders/Objects/bombs.yy",
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
    "name":"spr_explo_s_meio",
    "path":"sprites/spr_explo_s_meio/spr_explo_s_meio.yy",
  },
  "spriteMaskId":null,
  "visible":true,
}



} antiga criação de array para carregamento de audio/sfx  e aqui em timer, gera a ação de ao final do audio, os blocos começam a cair. Está dividido em outros arquivos também*/