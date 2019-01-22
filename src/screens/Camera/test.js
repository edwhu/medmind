// import drugData from "../../assets/Products-3.json";



function mockTakePicture() {
    var drugData = require("../../assets/Products-3.json");
    const mockData = ["gamod3n", "Tylen0l"];
    const stringSimilarity = require('string-similarity');
    for(let i = 0; i < mockData.length; i++) {
      if(mockData[i].length <= 5) 
        var j = 0;
      else if(mockData[i].length <= 10) 
        var j = 1;
      else if(mockData[i].length <= 15) 
        var j = 2;
      else if(mockData[i].length <= 20) 
        var j = 3;
      else if(mockData[i].length <= 25) 
        var j = 4;
      else 
        var j = 5;
      const bestMatch = stringSimilarity.findBestMatch(mockData[i].toUpperCase(), drugData[j]).bestMatch; //case sensitive
      console.log('Found a matching drug: ', bestMatch.target);
    }
  }

  mockTakePicture()
