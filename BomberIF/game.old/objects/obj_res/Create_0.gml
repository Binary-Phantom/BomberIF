bw = browser_width
bh = browser_height

camera_set_view_size(view_camera[0],bw,bh)
camera_set_view_pos(view_camera[0],((-bw)/2)+camera_get_view_width(view_camera[0])/2,((-bw)/2)+camera_get_view_height(view_camera[0])/2)
surface_resize(application_surface,view_wport[0],view_hport[0])
window_set_size(bw,bh)

window_center()
room_goto_next()_view_pos(view_camera[0],((-bw)/2)+camera_get_view_width(view_camera[0]))
