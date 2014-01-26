#pragma strict

var speed : float;
var dash : float;

function Start () {

}

function Update () {
	if (networkView.isMine) {
		var moveHorizontal : float = Input.GetAxis("Horizontal");
		var moveVertical : float = Input.GetAxis("Vertical");
		var movement : Vector3 = new Vector3(moveHorizontal,0,moveVertical);
			
		if (Input.GetButtonDown("Jump")) {
			print("DASH!");
		    rigidbody.AddForce(movement * dash);
		}	
	}
}

function FixedUpdate() {
 	if (networkView.isMine) {
		var moveHorizontal : float = Input.GetAxis("Horizontal");
		var moveVertical : float = Input.GetAxis("Vertical");
		var movement : Vector3 = new Vector3(moveHorizontal,0,moveVertical);
		
		rigidbody.AddForce(movement * speed * Time.deltaTime);
	}
}