function Interviews() {
  var self = this;
  var interviewsInfo=[];
  if (window.location.search.split("=").length>1) {
    var interviewsInfo=JSON.parse(commonApi("?getInterviews",{},{panelId:window.location.search.split("=")[1]}));
  } 
  self.interviews=ko.observableArray(interviewsInfo.hasOwnProperty("status")?[]:interviewsInfo);
}

ko.applyBindings(new Interviews());
