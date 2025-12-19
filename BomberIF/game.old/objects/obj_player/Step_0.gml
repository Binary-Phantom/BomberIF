
if (charind == 1){
	b_up = keyboard_check(vk_up);
	b_left =  keyboard_check(vk_left);
	b_down =  keyboard_check(vk_down);
	b_right =  keyboard_check(vk_right);
	b_bomb = keyboard_check_pressed(vk_space);
}


if (charind == 2){
	b_up = keyboard_check(ord("W"));
	b_left =  keyboard_check(ord("A"));
	b_down =  keyboard_check(ord("S"));
	b_right =  keyboard_check(ord("D"));
	b_bomb =  keyboard_check(ord("P"));
	//b_bomb = keyboard_check_pressed(vk_space);
}


if (charind == 3){
	b_up = keyboard_check(vk_numpad8);       
    b_left = keyboard_check(vk_numpad4);     
    b_down = keyboard_check(vk_numpad5);    
    b_right = keyboard_check(vk_numpad6);
	//b_bomb = keyboard_check(vk_tab);
	b_bomb =  keyboard_check(ord("Q"));
	//b_bomb = keyboard_check_pressed(vk_space);
}

if (vel > 2) vel = 2;


ScPlayer();
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 //n_bomb = keyboard_check_pressed(vk_space)







/*if (charind == 1){
	var b_up = keyboard_check(vk_up)
	var b_left =  keyboard_check(vk_left)
	var b_down =  keyboard_check(vk_down)
	var b_right =  keyboard_check(vk_right)
	var n_bomb = keyboard_check_pressed(vk_space)
}

if (charind == 2){
	var b_up = keyboard_check(ord("w"))
	var b_left =  keyboard_check(ord("a"))
	var b_down =  keyboard_check(ord("s"))
	var b_right =  keyboard_check(ord("d"))
	var n_bomb = keyboard_check_pressed(ord("f"))
}

if (charind == 3){
	var b_up = keyboard_check(ord("w"))
	var b_left =  keyboard_check(ord("a"))
	var b_down =  keyboard_check(ord("s"))
	var b_right =  keyboard_check(ord("d"))
	var n_bomb = keyboard_check_pressed(ord("f"))
}

ScPlayer();
*/