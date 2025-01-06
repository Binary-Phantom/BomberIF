function ScPlayer() {
    depth = -y;
if (alive==1){
if(b_bomb > 0 && bombsu < bombs)&& !place_meeting(x,y,obj_bomb){
	insert = 1;
	bombsu++;
	bomb = instance_create_depth((x div 16)*16, (y div 16)*16,0, obj_bomb);
	bomb.charid = id;
	bomb.force = global.force;
}


xs = b_right - b_left;
ys = b_down - b_up;
		 
	
	
	 
 if (place_meeting(x + 4, y, obj_col_box)) {
        if (xs > 0) xs = 0;
    }

    if (place_meeting(x - 4, y, obj_col_box)) {
        if (xs < 0) xs = 0;
    }

    if (place_meeting(x, y + 4, obj_col_box)) {
        if (ys > 0) ys = 0;
    }

    if (place_meeting(x, y - 4, obj_col_box)) {
        if (ys < 0) ys = 0;
    }	 
	
	
if!(place_meeting(x,y,obj_bomb)) insert = 0;
else insert = 1;

if (insert = 0){
	
	if (place_meeting(x + 4, y, obj_bomb)) {
        if (xs > 0) xs = 0;
    }

    if (place_meeting(x - 4, y,  obj_bomb)) {
        if (xs < 0) xs = 0;
    }

    if (place_meeting(x, y + 4,  obj_bomb)) {
        if (ys > 0) ys = 0;
    }

    if (place_meeting(x, y - 4,  obj_bomb)) {
        if (ys < 0) ys = 0;
    }	

}
else{
	bomblock1=0;
	bomblock2=0;
	bomblock3=0;
	bomblock4=0;
	bomba = instance_place(x,y,obj_bomb);
	with(bomba){
		other.bomblock1=instance_place(x+16,y,obj_bomb);
		other.bomblock2=instance_place(x-16,y,obj_bomb);
		other.bomblock3=instance_place(x,y+16,obj_bomb);
		other.bomblock4=instance_place(x,y-16,obj_bomb);
		
	}
	
	if (place_meeting(x + 4, y, bomblock1)) {
        if (xs > 0) xs = 0;
    }

    if (place_meeting(x - 4, y,  bomblock2)) {
        if (xs < 0) xs = 0;
    }

    if (place_meeting(x, y + 4,  bomblock3)) {
        if (ys > 0) ys = 0;
    }

    if (place_meeting(x, y - 4,  bomblock4)) {
        if (ys < 0) ys = 0;
    }	
	
	
}	

	
	
	
	
	
	
	
	//animações dos sprites
	 
if (ys>0){
	sprite_index = walk_f
}

if (ys==0&& xs==0 && sprite_index = walk_f){
		sprite_index = idle_f
}


if (ys<0){
	sprite_index = walk_b
}

if (ys==0&& xs==0 && sprite_index = walk_b){
		sprite_index = idle_b
}


if (xs>0){
	sprite_index = walk_r
}

if (ys==0&& xs==0 && sprite_index = walk_r){
		sprite_index = idle_r
}


if (xs<0){
	sprite_index = walk_l
}

if (ys==0&& xs==0 && sprite_index = walk_l){
		sprite_index = idle_l
}


	 
x+=xs*vel;
y+=ys*vel; 

	if(place_meeting(x,y,obj_explosao)){
		sprite_index = spr_pro_dead
		image_index = 0;
		alive = 0;
	
	
	}



}

else{
	if(image_index>=4.9)visible = false;
}
}
