#pragma strict

var myGUITexture : GUITexture;
var boostGUI : GUITexture;
var YellowDot : GameObject;
var GreenCheck : GameObject;
var PurpleLine : GameObject;
var TellDensity : int = 8; //KEEP BELOW 10!!!!


function Awake () {
	Instantiate(myGUITexture, new Vector3(0,0,0), Quaternion.identity);
	Instantiate(boostGUI, new Vector3(0,0,0), Quaternion.identity);
}

function Start () {
	SetPlayerHUD();
	SetBoostHUD();

	for (var i : int = 0; i < 5; i++){
		for (var j : int = 0; j < 5; j++){
			var seedNumber = Random.Range(1,4);
			if (seedNumber == 1){
				for (var k : int = 0;k < 20; k++){
					var n : int = 0;
					while (n < TellDensity){ 
					Instantiate(YellowDot, Vector3(Random.Range(((i*20)-50),((i*20)-30)),0.5,((j*20)-50)+k), new  Quaternion.AngleAxis(90, Vector3.right));
					n = Random.Range(1,10);
					}
				}
			}
			else if (seedNumber == 2){
				for (var l : int = 0;l < 20; l++){
					var o : int = 0;
					while (o < TellDensity){ 
					Instantiate(GreenCheck, Vector3(Random.Range(((i*20)-50),((i*20)-30)),0.5,((j*20)-50)+l), new  Quaternion.AngleAxis(90, Vector3.right));
					o = Random.Range(1,10);
					}				
				}
			}
			else if (seedNumber == 3){
				for (var m : int = 0;m < 20; m++){
					var p : int = 0;
					while (p < TellDensity){ 
					Instantiate(PurpleLine, Vector3(Random.Range(((i*20)-50),((i*20)-30)),0.5,((j*20)-50)+m), new  Quaternion.AngleAxis(90, Vector3.right));
					p = Random.Range(1,10);
					}
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
} */

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