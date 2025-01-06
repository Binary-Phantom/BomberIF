// Os recursos de script mudaram para a v2.3.0; veja
// https://help.yoyogames.com/hc/en-us/articles/360005277377 para obter mais informações
function SetSprites(){
	
	switch(charind){
		case 1:
		{
			idle_f = spr_pro_idle_f
			idle_b = spr_pro_idle_b
			idle_l = spr_pro_idle_l
			idle_r = spr_pro_idle_r
			
			walk_f = spr_pro_w_f
			walk_b = spr_pro_w_b
			walk_l = spr_pro_w_l
			walk_r = spr_pro_w_r
			dead = spr_pro_dead
			
		break;
		}
		
		case 2:
		{
			idle_f = spr_player2_idle_f
			idle_b = spr_player2_idle_b
			idle_l = spr_player2_idle_l
			idle_r = spr_player2_idle_r
			
			walk_f = spr_player2_w_f
			walk_b = spr_player2_w_b
			walk_l = spr_player2_w_l
			walk_r = spr_player2_w_r
			dead = spr_player_dead
			
		break;
			
		}
		case 3:
		{
			idle_f = spr_player3_idle_f
			idle_b = spr_player3_idle_b
			idle_l = spr_player3_idle_l
			idle_r = spr_player3_idle_r
			
			walk_f = spr_player3_w_f
			walk_b = spr_player3_w_b
			walk_l = spr_player3_w_l
			walk_r = spr_player3_w_r
			dead = spr_player_dead
			
		break;
			
		}
	}
}