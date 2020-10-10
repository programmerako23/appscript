function myFunction() {
  
  var docsTemplateID = "1B9lj5UNEW8OvMzUPGK82PS3A-nsjpQitNniv6zjg0Tg";
  var docsGeneratedFileID= "1hJ-d8H5npchWFwknIa3hf4jTTHYNZDrBRsEYiTNGPis";
  var sheetsGradesID = "1KFqaBuHDpdMmjeKokiZpTBwjpXLa7wmSihYKjNPScz4";
  
  
  var templateParagprah = DocumentApp.openById(docsTemplateID).getBody().getParagraphs();

  var docsGenerated = DocumentApp.openById(docsGeneratedFileID);
 
  var sheetFile = SpreadsheetApp.openById(sheetsGradesID).getSheetByName("Sheet1");
  
  
  docsGenerated.getBody().clear();
  
  var numColumns = 3; // ilagay kung ilan ang columns 
  
  var allData = sheetFile.getRange(2, 1, sheetFile.getLastRow()-1, numColumns).getValues();
  
  allData.forEach(function(data){  
    /// templateParagraph, fullName => data[1], student_id=> data[0], data[2], docsGenerated
    generateCertificate(templateParagprah,data[1],data[0],data[2],docsGenerated);
  });
}

function generateCertificate(templateParagprah,full_name,student_id,grade,docsGenerated){
    templateParagprah.forEach(function(p){
      // customize 
      docsGenerated.getBody().appendParagraph(
        p.copy()
        .replaceText("{FULL_NAME}",full_name)
        .replaceText("{STUDENT_ID}",student_id)
        .replaceText("{GRADE}",grade)
      );
    });
    
  docsGenerated.getBody().appendPageBreak();
  
}
