#pragma strict

var typeName : String = "BallOnBall";
var gameName : String = "Arena";
var hostList : HostData[];
var playerPrefab : GameObject;
var customButton : GUIStyle;
var background : Texture;
var host : Texture;
var refresh : Texture;
var join : Texture;

function StartServer(){
  Network.InitializeServer(4, 25000, !Network.HavePublicAddress());
  MasterServer.RegisterHost(typeName, gameName);
}

function OnServerInitialized () {
	Debug.Log("Server Initialized!");
	SpawnPlayer();
	audio.Stop();
}

function OnGUI() {
	if (!Network.isClient && !Network.isServer) {
		GUI.DrawTexture(new Rect(0, 0, Screen.width, Screen.height), background, ScaleMode.StretchToFill);
		if (GUI.Button(new Rect(Screen.width * 0.25, Screen.height * 0.65, Screen.width * 0.5, Screen.height * 0.15), host, customButton))
			StartServer();
		if (GUI.Button(new Rect(Screen.width * 0.41, Screen.height * 0.8, Screen.width * 0.2, Screen.height * 0.05), refresh, customButton))
            RefreshHostList();
        if (hostList != null) {
            for (var i : int = 0; i < hostList.Length; i++) {
                if (GUI.Button(new Rect(Screen.width * 0.25, Screen.height * 0.9, Screen.width * 0.5, Screen.height * 0.15), join, customButton))
                    JoinServer(hostList[i]);
            }
        }
	}
}

function RefreshHostList () {
	MasterServer.RequestHostList(typeName);
}

function OnMasterServerEvent(msEvent : MasterServerEvent){
  if (msEvent == MasterServerEvent.HostListReceived)
    hostList = MasterServer.PollHostList();
}

function JoinServer(hostData : HostData){
  Network.Connect(hostData);
}

function OnConnectedToServer(){
  Debug.Log("Server Joined!");
  SpawnPlayer();
  audio.Stop();
}

function SpawnPlayer(){
	var x : float = Random.value * 45;
	var z : float = Random.value * 45;
	print(x);
	print(z);
	var player = Network.Instantiate(playerPrefab, new Vector3(x, 1, z), Quaternion.identity, 0);
	gameObject.GetComponent.<CameraController>().player = player;
}