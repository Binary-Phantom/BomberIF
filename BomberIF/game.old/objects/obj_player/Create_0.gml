
b_right = 0;
b_left = 0;
b_down = 0;
b_up = 0;
//hspd = 1.2; // velocidade horizontal
//vspd = 1.2; // velocidade Vertical
xs = 0;
ys = 0;



if (!instance_exists(obj_game))instance_create_depth(0,0,0, obj_game);





// In the Create event of obj_player
//b_right = 0;
//b_left = 0;
//b_down = 0;
//b_up = 0;
//hspd = 2;
//vspd = 2; 
//xs = 0;
//ys = 0;



//hspd = 2;
//vspd = 2;


//atributos

//if (!instance_exists(obj_game))instance_create_depth(0,0,0, obj_game);
bombs = 1;
dmg = 2;
vel = 1.2;
bombsu = 0;
b_bomb = 0;
insert = 0;
alive = 1;

obj_game.nplayers++;
charind = obj_game.nplayers;
SetSprites();
sprite_index = idle_f