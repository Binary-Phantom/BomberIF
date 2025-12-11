socket = network_create_socket(network_socket_tcp)
global.socket = socket
buffer = buffer_create(20000, buffer_grow, 1)
connect = network_connect(socket, "127.0.0.1", PORT)



endidades = ds_map_create()