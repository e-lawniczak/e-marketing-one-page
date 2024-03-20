extends Node

@onready var points_label = %Points
@onready var time_label = %Time

var time = 0
var time_sec = 0
var formatted_time = ""

func _ready():
	points_label.text = "Butelki Prida: " + str(Global.points)

func add_point():
	Global.points += 1
	points_label.text = "Butelki Prida: " + str(Global.points)

func _process(delta):
	time = (Time.get_ticks_msec() - Global.time_start) * 0.001
	var mins = int(time) / 60
	time -= mins * 60
	var secs = int(time)
	var mili = int((time - int(time)) * 100)
	formatted_time = str(mins).pad_zeros(2) + ":" + str(secs).pad_zeros(2) + ":" + str(mili).pad_zeros(2)
	time_label.text = "Czas: " + formatted_time
