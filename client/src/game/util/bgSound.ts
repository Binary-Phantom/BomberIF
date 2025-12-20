/*
  key:   stage name
  value: possible sounds
*/
const SOUNDS:{[key:number]:number[]} = {
  0: [0,1,2],
  1: [3,4,5],
  2: [0,2,4],
}

export function getBgSound (name:number) {
  return `${process.env.PUBLIC_URL}/sound/stages/${SOUNDS[name].getRandom()}.mp3`
}