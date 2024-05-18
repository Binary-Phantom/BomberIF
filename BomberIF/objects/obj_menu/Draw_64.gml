// Evento de desenho do obj_menu
if (fnt_menu != undefined) {
    draw_set_font(fnt_menu);
    draw_set_halign(fa_center); // Define o alinhamento horizontal para centralizado

    // Loop através de cada item na matriz de menu
    var menu_length = array_length(menu); // Obtenha o comprimento da matriz de menu
    var x_center = room_width / 2; // Calcula a posição x central da sala
    var y_start = (room_height / 2) - ((menu_length * 32) / 2); // Calcula a posição y inicial para centralizar verticalmente

    for (var i = 0; i < menu_length; i++) {
        // Define a cor com base se o item está selecionado
        draw_set_color(cur_index == i ? c_red : c_blue);

        // Desenha o item do menu
        draw_text(x_center, y_start + 32 * i, menu[i]);
    }

    // Redefine o alinhamento horizontal para o padrão
    draw_set_halign(fa_left);
} else {
    show_debug_message("Erro: fnt_menu não está inicializado.");
}
