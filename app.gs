function myFunction() {
  
  var docsTemplateID = // you get the ID from the url of your document;
  var docsGeneratedFileID= // you get the ID from the url of your document ;
  var sheetsGradesID = // you get the ID from the url of your spreadsheet ;
  
  
  var templateParagprah = DocumentApp.openById(docsTemplateID).getBody().getParagraphs();

  var docsGenerated = DocumentApp.openById(docsGeneratedFileID);
  var sheetName = // add the name of the sheet that you will use 
  var sheetFile = SpreadsheetApp.openById(sheetsGradesID).getSheetByName(sheetName);
  
  
  docsGenerated.getBody().clear();
  
  var numColumns = 3; // how many columnns do you have  
  
  var allData = sheetFile.getRange(2, 1, sheetFile.getLastRow()-1, numColumns).getValues();
  
  allData.forEach(function(data){  
    /// templateParagraph, fullName => data[1], student_id=> data[0], data[2], docsGenerated
    generateCertificate(templateParagprah,data[1],data[0],data[2],docsGenerated);
  });
}
// you can change this according to your preference 
// always  use {} to generate it according to your desire 

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
