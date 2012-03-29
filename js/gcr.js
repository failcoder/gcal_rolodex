google.load("gdata", "1");
var gsempty,service,query,gSchedule;
gsempty = {
	uri : 'http://www.google.com/calendar/feeds/en.usa%23holiday%40group.v.calendar.google.com/public/full'
};
function formatDate(d) {
	return d.toLocaleDateString();
}
function formatTime(h,m) {
	var tm,t = "a.m. ";
	if (h > 12) {
		h = h - 12;
		t = "p.m. ";
	}
	if (m <= 9) {
		m = "0" + m;
	}
	tm = (h + ":" + m + " " + t);
	return tm;
}
function showevent(id) {
	var tog=document.getElementById(id + "-pop"),viz;
	if(tog) {
		viz=tog.style.display;
		if(viz==="none") {
			tog.style.display='block';
		} else {
			tog.style.display='none';
		}
	}
}
function scribe(result) {
	var y = result.feed.getEntries(),
		gcr = document.getElementById('gcr-container'),
		RSS = document.getElementById('gcr-feed'),
		lDr = document.getElementById('gcr-loader'),
		D,dID,B,L,cE,cT,sD,eD,jD,jeD,T,gWD,gMO,dH,
		eHREF,dS,bD,nD,myE,myB,myL,myH,ch,pnt,He,
		sT,sR,sL,sB,sD,sLT,sE,sM,sP,sS,tX,i=0;
	while(i < y.length)
	{
		cE=y[i];
		cT=cE.getTitle().getText();
		sD=null;
		eD=null;
		jD=null;
		T=cE.getTimes();
		if (T.length > 0) {
		  sD=T[0].getStartTime();
		  eD=T[0].getEndTime();
		  jD=sD.getDate();
		  jeD=eD.getDate();
		}
		eHREF=null;
		if (cE.getHtmlLink() != null) {
		  entryLinkHref=cE.getHtmlLink().getHref() + "&gsessionid=OK";
		}
		gWD=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
		gMO=new Array("January","February","March","April","May","June","July","August","September","October","November","December");
		dH=(gWD[jD.getDay()] + ", " + gMO[jD.getMonth()]) + " " + jD.getDate();
		dS=dH;
		bD=" ";
		nD=" ";
		if (!sD.isDateOnly()) {
		  dS = formatTime(jD.getHours(),jD.getMinutes());
		  bD = formatTime(jD.getHours(),jD.getMinutes());
		}
		if (!eD.isDateOnly()) {
		  dS += " - " + formatTime(jeD.getHours(),jeD.getMinutes());
		  nD = formatTime(jeD.getHours(),jeD.getMinutes());
		}
		if (dH == D) {
			myE = document.getElementById(dID);
			myB = document.getElementById(B);
			myL = document.getElementById(L);
		} else {
			myH = document.createElement('div');
			RSS.appendChild(myH);
			if (document.getElementById(('feed-date' + i))) {     
				  ch = document.getElementById(('feed-date' + i));
				  pnt = document.getElementById('gcr-feed');
				  pnt.removeChild(ch);
			}
			myE = document.createElement('input');
			myE.setAttribute('id',('feed-date' + i));
			myE.setAttribute('name','accordion-1');
			myE.setAttribute('type','radio');
			myH.appendChild(myE);
			if (document.getElementById(('feed-head' + i))) {     
				  ch = document.getElementById(('feed-head' + i));
				  pnt = document.getElementById(('feed-date' + i));
				  pnt.removeChild(ch);
			}
			He = document.createElement('label');
			He.setAttribute('for',('feed-date' + i));
			He.innerHTML = dH;
			myH.appendChild(He);
			myB = document.createElement('article');
			myB.setAttribute('class','ac-small');
			myH.appendChild(myB);
			myL = document.createElement('ul');
			myL.setAttribute('id',('feed-list' + i));
			myL.setAttribute('class','gcr-list');
			myB.appendChild(myL);
			dID = ('feed-date' + i);
			B = ('feed-block' + i);
			L = ('feed-list' + i);
			D = dH;
		}
		if (document.getElementById(('feed-time' + i))) {     
			  ch = document.getElementById(('feed-time' + i));
			  pnt = document.getElementById(L);
			  pnt.removeChild(ch);
		}
		sT = document.createElement('li');
		sT.setAttribute('id',('feed-title' + i));
		sT.setAttribute('style','list-style:none');
		sT.setAttribute('class','gcr-table');
		sR = document.createElement('p');
		sR.setAttribute('class','gcr-row');
		sT.appendChild(sR);
		sL = document.createElement('span');
		sL.setAttribute('class','gcr-cell');
		sL.innerHTML = bD;
		sR.appendChild(sL);
		sD = document.createElement('strong');
		sD.innerHTML = "-";
		sR.appendChild(sD);
		sE = document.createElement('span');
		sE.setAttribute('class','gcr-cell');
		sE.innerHTML = nD;
		sR.appendChild(sE);
		sLT = document.createElement('a');
		sLT.setAttribute('id',('feed-link' + i));
		sLT.setAttribute('class','show-stuff');
		sLT.innerHTML = cT;
		sLT.setAttribute('onclick',('showevent("'+'feed-link'+i+'")'));
		sR.appendChild(sLT);
		myL.appendChild(sT);
		tX = cE.getContent().getText();
		if (tX) {
			sM = document.createElement('i');
			sM.innerHTML = "click to read more.";
			sLT.appendChild(sM);
			if (document.getElementById(('feed-link' + i + '-pop'))) {     
				  ch = document.getElementById(('feed-link' + i + '-pop'));
				  pnt = document.getElementById(L);
				  pnt.removeChild(ch);
			}
			sP = document.createElement('div');
			sP.setAttribute('id',('feed-link' + i + '-pop'));
			sP.setAttribute('style','display:none');
			sP.setAttribute('class','gcr-pop');
			if (document.getElementById(('feed-status' + i))) {     
				  ch = document.getElementById(('feed-status' + i));
				  pnt = document.getElementById(L);
				  pnt.removeChild(ch);
			}
			sS = document.createElement('li');
			sS.setAttribute('id',('feed-status' + i));
			sS.setAttribute('style','list-style:none');
			sS.setAttribute('class','gcr-status');
			sS.innerHTML = cE.getContent().getText();
			sP.appendChild(sS);
			myL.appendChild(sP);
		}
		i++;
	}
	gcr.removeChild(lDr);
	gcr.appendChild(RSS);
}
function errors(e) {
	alert("There was an error!");
	alert(e.cause ? e.cause.statusText : e.message);
}
gSchedule = {
    init : function(o) {
		o.uri ? this.uri=o.uri : this.uri=gsempty.uri;
	},
	loader : function() {
		service = new google.gdata.calendar.CalendarService('Conference-Webconnect-1');
		query = new google.gdata.calendar.CalendarEventQuery(this.uri);
		query.setOrderBy('starttime');
		query.setSortOrder('ascending');
		query.setFutureEvents(true);
		query.setSingleEvents(true);
		query.setMaxResults(999);
		service.getEventsFeed(query,scribe,errors);
    },
	launch : function(o) {
		if (!o) {
			o=gsempty;
		}
		this.init(o);
		this.loader();
	}
}
function setupService() {}

google.setOnLoadCallback(setupService);