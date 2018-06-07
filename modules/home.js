function Home() {
  var self = this;
  self.username=ko.observable("");
  self.password=ko.observable("");
  self.isLogin=ko.observable(false);
  self.searchPanelText=ko.observable("");
  self.panelInfo=[];
  self.panelInfo=JSON.parse(commonApi("?getPanels")).map((item)=>{
      return {
        id:item.id,
        url:"./images/Profile3.png",
        designation:item.specilization,
        name:item.name,
        time:"02:22 Hours",
        description:item.panelDescription
      }
  })
  self.people = ko.observableArray([
    ...self.panelInfo,
    {
      id:10,
      url: "./images/Profile1.png",
      designation: "Sales Developer",
      name: "Murali",
      time: "02:22 Hours",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
      id:11,
      url: "./images/Profile2.png",
      designation: "Java Developer",
      name: "Tharu",
      time: "02:22 Hours",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
      id:12,
      url: "./images/Profile3.png",
      designation: "Usablity and User Expert",
      name: "Muhid",
      time: "02:22 Hours",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
      id:12,
      url: "./images/Profile1.png",
      designation: "Sales Developer",
      name: "Murali",
      time: "02:22 Hours",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
      id:13,
      url: "./images/Profile2.png",
      designation: "Java Developer",
      name: "Tharu",
      time: "02:22 Hours",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
      id:15,
      url: "./images/Profile3.png",
      designation: "Usablity and User Expert",
      name: "Muhid",
      time: "02:22 Hours",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content."
    }


  ]);
  self.filteredPanelInfo =ko.observableArray(self.people());
  self.errorMessage=ko.observable("");

  self.openLogin=()=>{
    if (!self.isLogin()) {
      $('#login').modal('show');
    } else {
      self.isLogin(!self.isLogin());
      self.closeSession();
    }
  }

  // self.setSession=()=>{
  //   window.localStorage.setItem("isLogin",true);
  // }
  //
  // self.closeSession=()=>{
  //     window.localStorage.setItem("isLogin",false);
  // }

  self.login=()=>{
    var loginResponse=JSON.parse(commonApi("?signIn",{},{emailId:self.username(),password:self.password()}));
    console.log(loginResponse);
    if (loginResponse.result==="success") {
      $('#login').modal('hide')
      self.errorMessage("")
      self.isLogin(!self.isLogin());
      // self.setSession();
    } else {
      self.errorMessage(loginResponse.errorCode)
    }

  }
  self.searchPanel= () =>
  {
    if (!self.isLogin()) {
      self.openLogin();
    } else {
      var filteredList=self.people().filter((item)=>{
        return item.name.toLowerCase().startsWith(self.searchPanelText().toLowerCase()) || item.designation.toLowerCase().startsWith(self.searchPanelText().toLowerCase()) || item.description.toLowerCase().startsWith(self.searchPanelText().toLowerCase())
      });
      self.filteredPanelInfo(filteredList);
    }
  }

  self.getInterviews=(panelId) =>{
    if (!self.isLogin()) {
      self.openLogin();
    } else {
      window.location="/inteview.html?panelId="+panelId;
    }
  }

}

ko.applyBindings(new Home());
