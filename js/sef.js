function channelInfo(){
	WindowPlugin = document.getElementById("PluginWindow"); 

	var channel = WindowPlugin.GetCurrentChannel_Major() + "-" + WindowPlugin.GetCurrentChannel_Minor();
	var channelName = WindowPlugin.GetCurrentChannel_Name();
	var programNumber = WindowPlugin.GetCurrentChannel_ProgramNumber();
	var PTC = WindowPlugin.GetCurrentChannel_PTC();
	var serviceName = WindowPlugin.GetCurrentChannel_ServiceName();
	var type = WindowPlugin.GetCurrentChannel_Type();
	
	
	var TVPlugin =  document.getElementById("PluginTV");
	var country = TVPlugin.GetCountry();
	var duration = TVPlugin.GetPresentProgram_Duration();
	var startTime = TVPlugin.ConvertEpochToLocalTime(TVPlugin.GetPresentProgram_StartTime());
	var endTime = TVPlugin.ConvertEpochToLocalTime(TVPlugin.GetPresentProgram_EndTime());
	var title = TVPlugin.GetPresentProgram_Title();
	
	
	var TimePlugin = document.getElementById('PluginTime');
	
	alert(country);
	// alert(programList);
	alert(title);
	alert(channelName);
	
	var epochTime = TimePlugin.GetEpochTime();
	TVPlugin.GetProgramList(epochTime, 3600); 
	var programListSize = TVPlugin.GetProgramList_Size();
	
	alert("Program List Size: " + programListSize);
	
	if( programListSize > 5 ) {
		programListSize = 5;
	}
	
	for(var i=0 ; i<programListSize ; ++i) {
		$('#guide').append(TVPlugin.GetProgram_Title(i) + '<br/>');
		$('#guide').append(TimePlugin.ConvertEpochToLocalTime( TVPlugin.GetProgram_StartTime(i) )+ '<br/>');
		$('#guide').append(TimePlugin.ConvertEpochToLocalTime( TVPlugin.GetProgram_EndTime(i) )+ '<br/>');
		$('#guide').append(TVPlugin.GetProgram_Duration(i)+ '<p/>');
	}
	
	
	
	// SefPlugin.Open("WINDOW", "0003", "Window"); 
	// 	SefPlugin.Execute("GetCurrentChannel_Major", "test", 33);
	// 	SefPlugin.Close();
	

}


channelInfo();