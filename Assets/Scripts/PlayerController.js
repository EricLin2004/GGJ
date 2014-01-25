#pragma strict

var speed : float;
var dash : float;
var staticDash : float;

function Start () {

}

function Update () {
	
}

function FixedUpdate() {
	var moveHorizontal : float = Input.GetAxis("Horizontal");
	var moveVertical : float = Input.GetAxis("Vertical");
	
	var speedX : float = speed;
	if (Input.GetButtonDown("Jump")) {
	  print("check");
	  speedX = (speed + staticDash) * dash;
	}
	
	var movement : Vector3 = new Vector3(moveHorizontal,0,moveVertical);
	
	rigidbody.AddForce(movement * speedX * Time.deltaTime);
}