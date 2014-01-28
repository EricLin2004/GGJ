#pragma strict

var WORLD : GameObject; 
var curAngle: float = 0; // current rotation angle
var rotating = false; // tell when it's rotating
var rotSpeed: float = 180; // how many degrees rotate per second - LIES. It does nothing.

function Start () {

}

function Update () {

}


function OnTriggerEnter () {
//    if (hit.gameObject.tag == ("RotateX") && !rotating){ // if not already rotating... 
//        rotating = true; // I'm rotating
        while (curAngle > -4500){
            var dAngle = rotSpeed * Time.deltaTime; // how much to rotate this frame
            curAngle += dAngle;                     // updates curAngle...
            WORLD.transform.Rotate(0, 0, dAngle);
            print(curAngle);   // rotates object by the same angle
            yield;  // suspend rotation until next frame
//        }
        curAngle -= 90;   // prepare for next 90 degrees rotation
        rotating = false; // I'm not rotating anymore
    }
    curAngle = 0;
}