extends Node

var points = 0
@onready var label = %Label

func add_point():
	points += 1
	print(points)
	label.text = "Cherries: " + str(points)
