extends Area2D


@export var target_level : PackedScene

@onready var sprite_2d = $Sprite2D

func _on_body_entered(body):
	
	if (body.name == "CharacterBody2D"):
		sprite_2d.animation = "pressed"
		await get_tree().create_timer(1.5).timeout
		get_tree().change_scene_to_packed(target_level)
