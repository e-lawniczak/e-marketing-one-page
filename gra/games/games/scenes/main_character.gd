extends CharacterBody2D


const SPEED = 300.0
const JUMP_VELOCITY = -700.0
@onready var sprite_2d = $Sprite2D

# Get the gravity from the project settings to be synced with RigidBody nodes.
var gravity = ProjectSettings.get_setting("physics/2d/default_gravity")
var lastDir = "right"
var last_on_floor = true


func _physics_process(delta):
	#if Input.is_action_just_pressed("pause"):
		#get_tree().paused = true
	# Animations
	if abs(velocity.x) > 1:
		sprite_2d.animation = "running"
	else:
		sprite_2d.animation = "default"
	
	if is_on_floor() and not last_on_floor:
		print("landed")
	
	# Add the gravity.
	if not is_on_floor():
		velocity.y += gravity * delta
		if velocity.y < 0:
			sprite_2d.animation = "jumping"
		if velocity.y > 0:
			sprite_2d.animation = "falling"
	
	# Handle jump.
	if Input.is_action_just_pressed("jump") and is_on_floor():
			velocity.y = JUMP_VELOCITY
	# Get the input direction and handle the movement/deceleration.
	# As good practice, you should replace UI actions with custom gameplay actions.
	var direction = Input.get_axis("left", "right")
	if direction:
		velocity.x = direction * SPEED
	else:
		velocity.x = move_toward(velocity.x, 0, 50)

	move_and_slide()
	
	var isLeft = velocity.x < 0
	var isRight = velocity.x > 0
	
	if isLeft:
		sprite_2d.flip_h = true
	if isRight:
		sprite_2d.flip_h = false
	
	last_on_floor = is_on_floor()
