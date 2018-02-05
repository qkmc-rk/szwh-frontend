// JavaScript Document


//Count script:ClickCount("DivName/TableName/ID/CountIndexID");
var xmlhttp;
var setIntervalbox;
var AjaxpostVar;
function loadMsgs()
{
xmlhttp=null;
if (window.XMLHttpRequest)
  {// code for Firefox, Opera, IE7, etc.
  xmlhttp=new XMLHttpRequest();
  }
else if (window.ActiveXObject)
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
if (xmlhttp!=null&&AjaxpostVar.length>0)
  {

  xmlhttp.onreadystatechange=state_Change;
  xmlhttp.open("GET",'/Inc/Msgs.aspx?var='+encodeURIComponent(AjaxpostVar)+'&ram='+Math.random(),true);
  xmlhttp.send(null);
  }
else
  {
  //alert("Your browser does not support XMLHTTP.");
  }
}

function state_Change()
{
if (xmlhttp.readyState==4)
  {// 4 = "loaded"
  if (xmlhttp.status==200)
    {// 200 = "OK"
    ShowMsgs(xmlhttp.responseText);
    }
  else
    {
    //alert("Problem retrieving data:" + xmlhttp.statusText+xmlhttp.status);
    }
  }
}

function ShowMsgs(vMsg){
var Mg=new Array();
Mg=vMsg.split('|');

if(Mg.length>1){
		if(Mg.length>2){
			if(Mg[0]=="Count"){
				AjaxpostVar="";
				document.getElementById(Mg[1]).innerHTML=Mg[2];
			}
			if(Mg[0]=="HtmlReW"){ 
				document.getElementById(Mg[1]).innerHTML=Mg[2];
			}
		}
		
		if(Mg[0]=="Alert"){ 
		AjaxpostVar="";
		alert(Mg[1]);
		}
	}else{
		setIntervalbox=window.clearInterval(setIntervalbox);
	}
}

function ClickCount(postVar){
	AjaxpostVar="Count/"+postVar;
    loadMsgs();
}
function SiteSearch(postVar){
	AjaxpostVar="Search/"+postVar;
    loadMsgs();
}
function MsgPost(postVar){
	AjaxpostVar="Msg/"+postVar;
    setIntervalbox=self.setInterval("loadMsgs()",500);
}

function QueryString()   
	{   
		//构造参数对象并初始化    
		var name,value,i;    
		var str=location.href;//获得浏览器地址栏URL串    
		var num=str.indexOf("?")    
		str=str.substr(num+1);//截取“?”后面的参数串    
		var arrtmp=str.split("&");//将各参数分离形成参数数组    
		for(i=0;i < arrtmp.length;i++)   
		{    
			num=arrtmp[i].indexOf("=");    
			if(num>0)   
			{    
				name=arrtmp[i].substring(0,num);//取得参数名称    
				value=arrtmp[i].substr(num+1);//取得参数值    
			   this[name]=value;//定义对象属性并初始化    
		   }    
		}    
	}   