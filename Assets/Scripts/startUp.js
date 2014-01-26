#pragma strict

var myGUITexture : GUITexture;
var boostGUI : GUITexture;
var YellowDot : GameObject;

function Awake () {
	Instantiate(myGUITexture, new Vector3(0,0,0), Quaternion.identity);
	Instantiate(boostGUI, new Vector3(0,0,0), Quaternion.identity);
}

function Start () {
	SetPlayerHUD();
	SetBoostHUD();
	Instantiate(YellowDot,new Vector3(0,0.5,0), new  Quaternion.AngleAxis(90, Vector3.right));
}

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