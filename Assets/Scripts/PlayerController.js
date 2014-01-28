#pragma strict

var speed : float;
var dash : float;
var staticDash : float;
var boosts : int = 0;
var boostOn : GUITexture;
var boostIcon : GUITexture;
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
    var speedX : float = speed;
		var moveHorizontal : float = Input.GetAxis("Horizontal");
		var moveVertical : float = Input.GetAxis("Vertical");
		var movement : Vector3 = new Vector3(moveHorizontal,0,moveVertical);

    if (Input.GetButtonDown("Jump") && !gameObject.Find("PlayerBoostOn(Clone)")) {
      speedX = (speed + staticDash) * dash;
      Instantiate(boostOn, new Vector3(0,0,1), Quaternion.identity);
      SetBoostHUD();
      Destroy(gameObject.Find("PlayerBoostOn(Clone)"), 1);
    }
		rigidbody.AddForce(movement * speed * Time.deltaTime);
	}
}

function OnCollisionEnter(other : Collision) {
	var movement : Vector3 = new Vector3(moveHorizontal,0,moveVertical);

	print(speedX);
	rigidbody.AddForce(movement * speedX * Time.deltaTime);

  if(other.gameObject.tag == "Player") {
    AudioSource.PlayClipAtPoint(explodeSound, transform.position);
    if(other.gameObject.rigidbody.velocity.magnitude > rigidbody.velocity.magnitude) {
      GUI.Label(new Rect(Screen.width * 0.3, Screen.height * 0.2, Screen.width * 0.2, Screen.height * 0.2), "Game Over!");
      print("Game over!");
      gameObject.SetActive(false);
    } else {
      GUI.Label(new Rect(Screen.width * 0.3, Screen.height * 0.2, Screen.width * 0.2, Screen.height * 0.2), "You Win!");
      print("You win!");
      other.gameObject.SetActive(false);
    }
  }
}

 // For Android Controls:
//function FixedUpdate() {
//	var move : Vector3 = Input.acceleration;
//	var touch = Input.GetTouch(0);
//	var speedX : float = speed;
//	if(touch.deltaPosition.x < 10 && touch.deltaPosition.y < 10 && !gameObject.Find("PlayerBoostOn(Clone)")) {
//		speedX = (speed + staticDash) * dash;
//		Instantiate(boostOn, new Vector3(0,0,1), Quaternion.identity);
//		SetBoostHUD();
//		Destroy(gameObject.Find("PlayerBoostOn(Clone)"), 1);
//	}
//
//	var movement : Vector3 = new Vector3(move.x,0,move.y);
//
//	rigidbody.AddForce(movement * speedX * Time.deltaTime * 3);
//}

function SetBoostHUD () {
    var textureHeight : int = boostOn.texture.height;
    var textureWidth : int = boostOn.texture.width;
    var screenHeight : int = Screen.currentResolution.height;
    var screenWidth : int = Screen.currentResolution.width;

    var screenAspectRatio : int = (screenWidth / screenHeight);
    var textureAspectRatio : int = (textureWidth / textureHeight);

    var scaledHeight : float;
    var scaledWidth : float;
    if (textureAspectRatio <= screenAspectRatio)
    {
        // The scaled size is based on the height
        scaledHeight = screenHeight;
        scaledWidth = (screenHeight * textureAspectRatio);
    }
    else
    {
        // The scaled size is based on the width
        scaledWidth = screenWidth;
        scaledHeight = (scaledWidth / textureAspectRatio);
    }
    boostOn.pixelInset =
    	new Rect(0, 0, scaledWidth / 4, scaledHeight / 4);
}