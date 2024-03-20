extends Node

@onready var points_label = %Points

# Called when the node enters the scene tree for the first time.
func _ready():
	Global.time_start = Time.get_ticks_msec()
	Global.points = 0
	points_label.text = "Butelki Prida: " + str(Global.points)


# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta):
	pass
