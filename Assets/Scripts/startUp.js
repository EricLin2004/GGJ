#pragma strict

var myGUITexture : GUITexture;
var myGUI;

function Awake () {
	var myGUI = Instantiate(myGUITexture, new Vector3(0,0,0), Quaternion.identity);
}

function Start () {
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

function Update () {

}