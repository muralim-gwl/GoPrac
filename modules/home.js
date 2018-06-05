function Home() {
  var self = this;

  self.people = ko.observableArray([
    {
      url: "./images/Profile1.png",
      designation: "Sales Developer",
      name: "Murali",
      time: "02:22 Hours",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
      url: "./images/Profile2.png",
      designation: "Java Developer",
      name: "Tharu",
      time: "02:22 Hours",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
      url: "./images/Profile3.png",
      designation: "Usablity and User Expert",
      name: "Muhid",
      time: "02:22 Hours",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
      url: "./images/Profile1.png",
      designation: "Sales Developer",
      name: "Murali",
      time: "02:22 Hours",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
      url: "./images/Profile2.png",
      designation: "Java Developer",
      name: "Tharu",
      time: "02:22 Hours",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
      url: "./images/Profile3.png",
      designation: "Usablity and User Expert",
      name: "Muhid",
      time: "02:22 Hours",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content."
    }
  ]);
}

ko.applyBindings(new Home());
