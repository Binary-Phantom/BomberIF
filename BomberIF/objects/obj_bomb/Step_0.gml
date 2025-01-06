// Verifica se a bomba foi atingida por uma explosão e detona automaticamente
if (place_meeting(x, y, obj_explosao)) {
    // Detona a bomba instantaneamente
    timer = 3 * 60;  // Força a bomba a explodir imediatamente
}

// Controle de explosão pelo timer
if (timer < 3 * 60) {  // Temporizador para a bomba explodir
    timer++;
} else {
    // Propagação da explosão
    for (var i = 0; i <= force; i++) {
        if (i == 0) {
            // Cria o centro da explosão
            instance_create_depth(x, y, 0, obj_explosao);
        } else {
            // **Quadrante 1 (direita)**
            if (quad1 == 0) {
                if (place_meeting(x + 16 * i, y, obj_col_box)) {
                    if (place_meeting(x + 16 * i, y, obj_block)) {
                        var block = instance_place(x + 16 * i, y, obj_block);
                        block.sprite_index = spr_explo_block;
                    }
                    quad1 = 1;  // Impede mais explosões nessa direção
                } else {
                    var fire = instance_create_depth(x + 16 * i, y, 0, obj_explosao);
                    if (i == force) fire.sprite_index = spr_explo_ponta_hori_r;
                    else fire.sprite_index = spr_explo_s_hori_r;
                }
            }

            // **Quadrante 2 (esquerda)**
            if (quad2 == 0) {
                if (place_meeting(x - 16 * i, y, obj_col_box)) {
                    if (place_meeting(x - 16 * i, y, obj_block)) {
                        var block = instance_place(x - 16 * i, y, obj_block);
                        block.sprite_index = spr_explo_block;
                    }
                    quad2 = 1;  // Impede mais explosões nessa direção
                } else {
                    var fire = instance_create_depth(x - 16 * i, y, 0, obj_explosao);
                    if (i == force) fire.sprite_index = spr_explo_ponta_hori_l;
                    else fire.sprite_index = spr_explo_s_hori_l;
                }
            }

            // **Quadrante 3 (baixo)**
            if (quad3 == 0) {
                if (place_meeting(x, y + 16 * i, obj_col_box)) {
                    if (place_meeting(x, y + 16 * i, obj_block)) {
                        var block = instance_place(x, y + 16 * i, obj_block);
                        block.sprite_index = spr_explo_block;
                    }
                    quad3 = 1;  // Impede mais explosões nessa direção
                } else {
                    var fire = instance_create_depth(x, y + 16 * i, 0, obj_explosao);
                    if (i == force) fire.sprite_index = spr_explo_ponta_b;
                    else fire.sprite_index = spr_explo_s_vert_b;
                }
            }

            // **Quadrante 4 (cima)**
            if (quad4 == 0) {
                if (place_meeting(x, y - 16 * i, obj_col_box)) {
                    if (place_meeting(x, y - 16 * i, obj_block)) {
                        var block = instance_place(x, y - 16 * i, obj_block);
                        block.sprite_index = spr_explo_block;
                    }
                    quad4 = 1;  // Impede mais explosões nessa direção
                } else {
                    var fire = instance_create_depth(x, y - 16 * i, 0, obj_explosao);
                    if (i == force) fire.sprite_index = spr_explo_ponta;
                    else fire.sprite_index = spr_explo_s_vert;
                }
            }
        }
    }

    // Após a explosão, remove a bomba
    charid.bombsu--;
    instance_destroy();
}