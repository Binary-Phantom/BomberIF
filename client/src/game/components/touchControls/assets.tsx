interface ActionProps {
  onTouchStart: () => void
}



/* =========================
   BOTÃO DE AÇÃO (BOMBA)
========================= */
export function Action({ onTouchStart }: ActionProps) {
  return (
    <svg
      onTouchStart={onTouchStart}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      width="100%"
      height="100%"
    >
      <circle cx="64" cy="64" r="60" fill="currentColor" />
    </svg>
  )
}

/*export function Down () {
  return (
    <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 180" width="100%" height="100%"><style></style><path  d="m31.7 32.1l-31.7 31.9v116h128v-116c-49.6-49.6-64.1-64-64.3-63.9-0.1 0-14.5 14.4-32 32z"/></svg>
  )
}

export function Left () {
  return (
    <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 128" width="100%" height="100%"><style></style><path  d="m0 64v64h116.3l63.7-64-64-64h-116z"/></svg>
  )
}

export function Right () {
  return (
    <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 128" width="100%" height="100%"><style></style><path  d="m32.1 32l-32.1 32 64 64h116v-128h-115.9z"/></svg>
  )
}

export function Up () {
  return (
    <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 180" width="100%" height="100%"><style></style><path  d="m0 58v58l64 64 64-64v-116h-128z"/></svg>
  )
}

*/



/*
{
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
}  antiga declaração para o objeto do lobby  e controles mobile*/