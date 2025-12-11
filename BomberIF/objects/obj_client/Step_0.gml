if (keyboard_check_pressed(vk_left)){

	SendKey(KEY_LEFT, true)

}

if (keyboard_check_released(vk_left)){

	SendKey(KEY_LEFT, false)

}


if (keyboard_check_pressed(vk_right)){

	SendKey(KEY_RIGHT, true)

}

if (keyboard_check_released(vk_right)){

	SendKey(KEY_RIGHT, false)

}