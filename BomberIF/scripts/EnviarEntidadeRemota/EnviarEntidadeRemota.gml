// Os recursos de script mudaram para a v2.3.0; veja
// https://help.yoyogames.com/hc/en-us/articles/360005277377 para obter mais informações
function EnviarEntidadeRemota(){

#macro CMD_X 0
#macro CMD_Y 1
#macro CMD_NAME 2
#macro CMD_SPRITE 3
#macro CMD_DESTROY  4


buffer_seek(buffer, buffer_seek_start, 0)
buffer_write (buffer, buffer_u8, PACKET_ENTITY)
buffer_write (buffer, buffer_u8, argument1)
buffer_write (buffer, buffer_u16, argument2)

switch (argument1) {
	case CMD_X:
		buffer_write(buffer, buffer_s16, argument3)
	break
	
	case CMD_Y:
		buffer_write(buffer, buffer_s16, argument3)
	break
	
	case CMD_NAME:
		buffer_write(buffer, buffer_string, argument3)
	break
	
	case CMD_SPRITE:
		buffer_write(buffer, buffer_u16, argument3)
	break
	
	case CMD_DESTROY:
		buffer_write(buffer, buffer_u8, argument3)
	break


}

network_send_packet(argument0, buffer, buffer_tell(buffer))


}