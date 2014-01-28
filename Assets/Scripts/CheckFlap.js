#pragma strict

var WORLD : GameObject; 
var curAngle: float = 0; // current rotation angle
var rotating = false; // tell when it's rotating
var rotSpeed: float = 180; // how many degrees rotate per second - LIES. It does nothing.
var rotationRando: float = 0; //rotation modifier - try setting to 2?
var rotationRandoBack: float = 0; //rotation speed going back - try setting to 1?

function Start () {

}

function Update () {

}


function OnTriggerEnter () {
//    if (hit.gameObject.tag == ("RotateX") && !rotating){ // if not already rotating... 
//        rotating = true; // I'm rotating
    for(var n = 0; n<10; n++) {
       while (curAngle < 180){
            var dAngle = rotSpeed * Time.deltaTime + rotationRando; // how much to rotate this frame
            curAngle += dAngle;                     // updates curAngle...
            WORLD.transform.Rotate(-dAngle, 0, 0);   // rotates object by the same angle
            yield;  // suspend rotation until next frame
//            print(curAngle);
            }
       for(var m=0;m<10;m++){
            dAngle = rotSpeed * Time.deltaTime + rotationRandoBack; // how much to rotate this frame
            curAngle += dAngle;                     // updates curAngle...
            WORLD.transform.Rotate(dAngle, 0, 0);   // rotates object by the same angle
            yield;  // suspend rotation until next frame
//            print(curAngle);
		}
        }
//         while (curAngle > 180){
//            dAngle = rotSpeed * Time.deltaTime; // how much to rotate this frame
//            curAngle -= dAngle;                     // updates curAngle...
//            WORLD.transform.Rotate(dAngle, 0, 0);   // rotates object by the same angle
//            yield;  // suspend rotation until next frame
//            print(curAngle);

//        }
//        curAngle -= 90;   // prepare for next 90 degrees rotation
//        rotating = false; // I'm not rotating anymore
    }