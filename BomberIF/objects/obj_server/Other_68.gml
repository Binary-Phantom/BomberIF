var event_id = async_load[? "id"]

if server == event_id{
	var type = async_load[? "type"]
	var sock = async_load[? "socket"]
	
	
	if (type == network_type_connect){
		ds_list_add(sockets, sock)
		
		
		var p = instance_create_layer(100, 100+32*sock, "Instances", obj_player)
		
		ds_map_add(clients, sock, p)
	}
	
	
		for (var i = 0; i < instance_number(obj_player); i++){
			var pl = instance_find(obj_player, i)
			EnviarEntidadeRemota(sock, CMD_X, pl.id, pl.x)
			EnviarEntidadeRemota(sock, CMD_Y, pl.id, pl.y)
			EnviarEntidadeRemota(sock, CMD_NAME, pl.id, pl.nick)
			EnviarEntidadeRemota(sock, CMD_SPRITE, pl.id, pl.spr_teste)
		
		
		
		
		}
	
	
	
	if (type == network_type_disconnect){
			var p = clients[? sock]
			if (instance_exists(p)){
				with (p){
					instance_destroy()
				
				}
			
			}
	
			ds_list_delete(sockets, ds_list_find_index(sockets, sock))
			ds_map_delete(clients, sock)
	
	}

}else if event_id != global.socket {
	var sock = async_load[? "id"]
	var buff = async_load[? "buffer"]
	
	buffer_seek (buff, buffer_seek_start, 0)
	var cmd = buffer_read(buff, buffer_u8)

	var p = clients [? sock]
	switch (cmd) {
		case PACKET_KEY :
			with (p) {
				var k = buffer_read(buff, buffer_u8)
				var s = buffer_read(buff, buffer_u8)
				keys [k] = s
			
			}
		break
	
	}

}