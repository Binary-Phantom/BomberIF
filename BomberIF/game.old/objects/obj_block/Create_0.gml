depth  = -y

repeat (1000){
	randomize()

}
if (irandom(10)<2){
	instance_destroy()

}else{
	block = instance_create_depth(x,y,0, obj_col_box)
	
	//dropar item
	var chance = irandom(100);
	if(chance >20){
	
		instance_create_layer(x,y,"instances", obj_powerup );
	
	}

}