#pragma strict

var typeName : String = "BallOnBall";
var gameName : String = "Arena";
var hostList : HostData[];
var playerPrefab : GameObject;
var background : Texture;

function StartServer(){
  Network.InitializeServer(4, 25000, !Network.HavePublicAddress());
  MasterServer.RegisterHost(typeName, gameName);
}

function OnServerInitialized () {
	Debug.Log("Server Initialized!");
	SpawnPlayer();
}

function OnGUI() {
	if (!Network.isClient && !Network.isServer) {
		GUI.DrawTexture(new Rect(0, 0, Screen.width, Screen.height), background, ScaleMode.StretchToFill);
		if (GUI.Button(new Rect(100, 100, 250, 100), "Start Server"))
			StartServer();
		if (GUI.Button(new Rect(100, 250, 250, 100), "Refresh Hosts"))
            RefreshHostList();
        if (hostList != null) {
            for (var i : int = 0; i < hostList.Length; i++) {
                if (GUI.Button(new Rect(400, 100 + (110 * i), 300, 100), hostList[i].gameName))
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
}

function SpawnPlayer(){
	var x : float = Random.value * 45;
	var z : float = Random.value * 45;
	print(x);
	print(z);
	var player = Network.Instantiate(playerPrefab, new Vector3(x, 1, z), Quaternion.identity, 0);
	gameObject.GetComponent.<CameraController>().player = player;
}