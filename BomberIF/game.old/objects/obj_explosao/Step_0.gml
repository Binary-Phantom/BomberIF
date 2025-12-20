if (image_index>=4.9) instance_destroy();

if(place_meeting(x,y,obj_explosao)){
	switch(sprite_index){
		case spr_explo_s_meio: nivel = 0;break;
		case spr_explo_s_vert:
		case spr_explo_s_vert_b: 
		case spr_explo_s_hori_l:
		case spr_explo_s_hori_r: nivel = 1;break;
		case spr_explo_ponta:
		case spr_explo_ponta_b: 
		case spr_explo_ponta_hori_r:
		case spr_explo_ponta_hori_l:  nivel = 2;break;

	}
	juncao = instance_place(x,y,obj_explosao);
	switch(juncao.sprite_index){
		case spr_explo_s_meio: colisao = 0;break;
		case spr_explo_s_vert:
		case spr_explo_s_vert_b: 
		case spr_explo_s_hori_l: 
		case spr_explo_s_hori_r: colisao = 1;break;
		case spr_explo_ponta: 
		case spr_explo_ponta_b: 
		case spr_explo_ponta_hori_r:
		case spr_explo_ponta_hori_l: colisao = 2;break; 

	}
	if!(nivel<colisao) instance_destroy();
	
}