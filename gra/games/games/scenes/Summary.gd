extends Node

@onready var result_label = %Result

@onready var success_panel = %SuccessPanel
@onready var fail_panel = %FailPanel

@onready var email_input = %EmailInput
@onready var send_button = %SendButton

@onready var email_sent = %EmailSent

# Called when the node enters the scene tree for the first time.
func _ready():
	email_input.visible = true
	send_button.visible = true
	email_sent.visible = false
	
	var time = (Time.get_ticks_msec() - Global.time_start) * 0.001
	var score = 3000 + int(time) * -30 + Global.points * 150
	result_label.text = "Wynik: " + str(score)
	
	if score >= 4000:
		success_panel.visible = true
		fail_panel.visible = false
	else:
		success_panel.visible = false
		fail_panel.visible = true

# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta):
	pass

func _on_restart_pressed():
	get_tree().change_scene_to_file("res://scenes/level1.tscn")
	

func _on_send_button_pressed():
	email_input.visible = false
	send_button.visible = false
	email_sent.visible = true
