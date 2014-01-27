#pragma strict

var speed : float;
var dash : float;
var dashSound : AudioClip;
var explodeSound : AudioClip;

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
		    AudioSource.PlayClipAtPoint(dashSound, transform.position);
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

function OnCollisionEnter(other : Collision) {
	
	if(other.gameObject.tag == "Player") {
		AudioSource.PlayClipAtPoint(explodeSound, transform.position);
		if(other.gameObject.rigidbody.velocity.magnitude > rigidbody.velocity.magnitude) {
			print("game over!");		
			gameObject.SetActive(false);
		} else {
			print("You win!");
			other.gameObject.SetActive(false);
		}
	}
}