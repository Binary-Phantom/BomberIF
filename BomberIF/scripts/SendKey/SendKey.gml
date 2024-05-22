// Os recursos de script mudaram para a v2.3.0; veja
// https://help.yoyogames.com/hc/en-us/articles/360005277377 para obter mais informações
function SendKey(){

buffer_seek(buffer, buffer_seek_start, 0)
buffer_write(buffer, buffer_u8, PACKET_KEY)
buffer_write(buffer, buffer_u8, argument0)
buffer_write(buffer, buffer_u8, argument1)
network_send_packet(socket, buffer, buffer_tell(buffer))

}


//buffer_seek(buffer, buffer_seek_start, 0)
//buffer_write(buffer, buffer_u8, PACKET_KEY)
//buffer_write(buffer, buffer_u8, argument0)
//buffer_write(buffer, buffer_u8, argument1)
//network_send_packt(socket, buffer, buffer_tell(buffer))