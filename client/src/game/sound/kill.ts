const SOUND = new Audio(`${process.env.PUBLIC_URL}/sound/kill/0.mp3`)

export function playKillSound () {
  SOUND.currentTime = 0
  SOUND.play().catch(()=>{})
}

/* if socket == event_id {

	var buff = async_load["buffer"]
	buffer_seek(buff, buffer_seek_start, 0)
	var cmd = buffer_read(buff, buffer_u8)
	
	switch (cmd){
	
	
	
	}
} antiga criação de array para carregamento de audio/sfx */