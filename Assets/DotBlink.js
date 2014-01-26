#pragma strict

var Countdown = 0;
var timeVisible=0.25;
var timeInvisible = 0.5;
var blinkFor=0.5;
var startState=true;
var endState=true;

function Start () {

}

function Update () {

}

function OnTriggerEnter () {
	
	renderer.enabled=false;
	yield WaitForSeconds (0.2);
	renderer.enabled=true;
	yield WaitForSeconds (0.2);
	renderer.enabled=false;
	yield WaitForSeconds (0.2);
	renderer.enabled=true;
	yield WaitForSeconds (0.2);
	renderer.enabled=false;
	yield WaitForSeconds (0.2);
	renderer.enabled=true;
	
	
  	
/*   	renderer.enabled=startState;
    yield WaitForSeconds(Countdown);
    var whenAreWeDone=Time.time + blinkFor;
    while(Time.time < whenAreWeDone){
        if(startState){
            renderer.enabled=false;
            yield WaitForSeconds(timeInvisible);
            renderer.enabled=true;
            yield WaitForSeconds(timeVisible);
        } else {
            renderer.enabled=true;
            yield WaitForSeconds(timeVisible);
            renderer.enabled=false;
            yield WaitForSeconds(timeInvisible);
        }
    }
    	renderer.enabled=endState; */
}