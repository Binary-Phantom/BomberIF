// Step event of obj_menu
if (keyboard_check_pressed(vk_down)) {
    cur_index++;
}

if (keyboard_check_pressed(vk_up)) {
    cur_index--;
}

// Assegura a inicialização do meneu e garante o clamping
if (array_length(menu) > 0) {
    cur_index = clamp(cur_index, 0, array_length(menu) - 1);
} else {
    show_debug_message("Erro: menu não iniciado ou inexistente.");
    cur_index = 0; 
}

// checar teclas
if (keyboard_check_pressed(vk_enter)) { 
    switch(cur_index) {
        case 0:
            // Criar jogo
           // instance_create_layer(0, 0, "Instances", obj_server);
            room_goto(rm_game);
            break;
        
        case 1:
            // Procurar partida
            show_debug_message("Procurar sala");
			room_goto(rm_lobby);
            break;
        
        case 2:
            // Opções 
            show_debug_message("Opcoes");
			room_goto(rm_config);
            break;
        
        case 3:
            // Sair
            game_end();
            break;
        
       
    }
}
