#pragma strict

var myGUITexture : GUITexture;
var boostGUI : GUITexture;
var YellowDot : GameObject;
var GreenCheck : GameObject;
var PurpleLine : GameObject;


function Awake () {
	Instantiate(myGUITexture, new Vector3(0,0,0), Quaternion.identity);
	Instantiate(boostGUI, new Vector3(0,0,0), Quaternion.identity);
}

function Start () {
	SetPlayerHUD();
	SetBoostHUD();

	for (var i : int = 0; i < 10; i++){
		for (var j : int = 0; j < 10; j++){
			var seedNumber = Random.Range(0,3);
			if (seedNumber == 1){
				for (var k : int = 0;k < Random.Range(0,1); k++){
				Instantiate(YellowDot, Vector3(Random.Range(j-5,j-4),0.5,i-5), new  Quaternion.AngleAxis(90, Vector3.right));
				}
			}
			else if (seedNumber == 2){
				for (var l : int = 0;l < Random.Range(5,15); l++){
				Instantiate(GreenCheck, Vector3(Random.Range(j-5,j-4),0.5,i-5), new  Quaternion.AngleAxis(90, Vector3.right));
				}
			}
			else if (seedNumber == 3){
				for (var m : int = 0;m < Random.Range(5,15); m++){
				Instantiate(PurpleLine, Vector3(Random.Range(j-5,j-4),0.5,i-5), new  Quaternion.AngleAxis(90, Vector3.right));
				}
			}
		}
	}
}
		
/*	for (var i : int = 0;i < 100; i++) {
	Instantiate(YellowDot, Vector3(Random.Range(-5,0),0.5,(i/10)+0), new  Quaternion.AngleAxis(90, Vector3.right));
	Instantiate(GreenCheck, Vector3(Random.Range(0,5),0.5,(i/10)+0), new  Quaternion.AngleAxis(90, Vector3.right));
	Instantiate(PurpleLine, Vector3(Random.Range(0,5),0.5,-(i/10)+0), new  Quaternion.AngleAxis(90, Vector3.right));
	}
}*/

function SetPlayerHUD () {
    // Position the billboard in the center, 
    // but respect the picture aspect ratio
    var textureHeight : int = myGUITexture.texture.height;
    var textureWidth : int = myGUITexture.texture.width;
    var screenHeight : int = Screen.height;
    var screenWidth : int = Screen.width;
    
    var screenAspectRatio : int = (screenWidth / screenHeight);
    var textureAspectRatio : int = (textureWidth / textureHeight);
    
    var scaledHeight : int;
    var scaledWidth : int;
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
    var xPosition : float = screenWidth / 2 - (scaledWidth / 2);
    myGUITexture.pixelInset = 
        new Rect(xPosition, 282, scaledWidth, scaledHeight);
}

function SetBoostHUD () {
    var textureHeight : int = boostGUI.texture.height;
    var textureWidth : int = boostGUI.texture.width;
    var screenHeight : int = Screen.height;
    var screenWidth : int = Screen.width;
    
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
    boostGUI.pixelInset = 
    	new Rect(0, 0, scaledWidth / 4, scaledHeight / 4);
}