// API Reference: https://www.wix.com/velo/reference/api-overview/introduction
// “Hello, World!” Example: https://learn-code.wix.com/en/article/1-hello-world
import { getTemplates, getPDF, getImage, startEditor, updateTemplate, createTemplate, asynchronousPDF } from 'backend/generatePdf.jsw';
var template_id = ""
var data = {
      'invoice_number': 'INV38379',
      'date': '2021-09-30',
      'currency': 'USD',
      'total_amount': 82542.56
    }

$w.onReady(function () {
	// Write your JavaScript here

	// To select an element by ID use: $w('#elementID')
  getTemplates().then((options) => {
    $w("#dropdown1").options = options;
    $w("#dropdown1").value = template_id;
  });


  $w("#dropdown1").onChange((event) => {
    template_id = event.target.value;
  });


  $w('#button1').onClick(() => {

    $w('#button9').label = "Generating PDF...";

    getPDF(template_id,data).then((file) => {
      $w("#button9").label = "Download PDF";
      $w("#button9").link = file;
    });

  });

  $w('#button7').onClick(() => {

    $w('#button9').label = "Generating Image...";

    getImage(template_id,data).then((file) => {
      $w("#button9").label = "Download Image";
      $w("#button9").link = file;
    });

  });

  $w('#button8').onClick(() => {

    $w('#button9').label = "Starting Editor...";

    startEditor(template_id,data).then((url) => {
      $w("#button9").label = "Open Editor";
      $w("#button9").link = url;
    });

  });

  $w('#button6').onClick(() => {

    $w('#button9').label = "Updating Template...";

    updateTemplate(template_id, $w("#input13").value).then((url) => {
      $w("#button9").label = "Template Updated";
    });

  });

  $w('#button10').onClick(() => {

    $w('#button9').label = "Creating Template...";

    createTemplate($w("#input13").value, template_id).then((url) => {
      $w("#button9").label = "Template Created";
    });

  });

   $w('#button11').onClick(() => {

    $w('#button9').label = "Generating PDF...";

    asynchronousPDF(template_id,data).then((file) => {
      $w("#button9").label = "Download PDF";
    });

  });

});