import { Server } from 'socket.io'
import { FlingBombDTO, HoldBombDTO, KillDTO, MoveBombDTO, MoveDTO, NullifyBlockDTO, PlaceBombDTO } from '#/dto'
import { Socket } from '~/extends'

export function onMove (io:Server, socket:Socket, dto:MoveDTO) {
  dto.p = socket.data.index
  io.to(socket.data.roomId).emit('mv', dto)
}

export function onPlaceBomb (io:Server, socket:Socket, dto:PlaceBombDTO) {
  dto.p = socket.data.index
  io.to(socket.data.roomId).emit('pb', dto)
}

export function onMoveBomb (io:Server, socket:Socket, dto:MoveBombDTO) {
  dto.p = socket.data.index
  io.to(socket.data.roomId).emit('mb', dto)
}

export function onHoldBomb (io:Server, socket:Socket, dto:HoldBombDTO) {
  dto.p = socket.data.index
  io.to(socket.data.roomId).emit('hb', dto)
}

export function onFlingBomb (io:Server, socket:Socket, dto:FlingBombDTO) {
  dto.p = socket.data.index
  io.to(socket.data.roomId).emit('fb', dto)
}

export function onNullifyBlock (io:Server, socket:Socket, dto:NullifyBlockDTO) {
  io.to(socket.data.roomId).emit('nb', dto)
}

export function onKill (io:Server, socket:Socket, dto:KillDTO) {
  dto.p = socket.data.index
  io.to(socket.data.roomId).emit('kl', dto)
}

/* {
  "$GMObject":"",
  "%Name":"obj_client",
  "eventList":[
    {"$GMEvent":"","%Name":"","collisionObjectId":null,"eventNum":0,"eventType":0,"isDnD":false,"name":"","resourceType":"GMEvent","resourceVersion":"2.0",},
    {"$GMEvent":"","%Name":"","collisionObjectId":null,"eventNum":0,"eventType":3,"isDnD":false,"name":"","resourceType":"GMEvent","resourceVersion":"2.0",},
    {"$GMEvent":"","%Name":"","collisionObjectId":null,"eventNum":68,"eventType":7,"isDnD":false,"name":"","resourceType":"GMEvent","resourceVersion":"2.0",},
  ],
  "managed":true,
  "name":"obj_client",
  "overriddenProperties":[],
  "parent":{
    "name":"Objects",
    "path":"folders/Objects.yy",
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
  "spriteId":null,
  "spriteMaskId":null,
  "visible":true,
} modo antigo de criar o obj do lobby */