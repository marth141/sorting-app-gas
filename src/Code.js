/**
 * Used to get index file
 * @param {*} e
 * @return {GoogleAppsScript.HTML.HtmlOutput}
 */
function doGet(e) {
  Logger.log(Utilities.jsonStringify(e));
  if (!e.parameter.page) {
    // When no specific page requested, return "home page"
    return HtmlService.createTemplateFromFile('index').evaluate();
  }
  // else, use page parameter to pick an html file from the script
  return HtmlService.createTemplateFromFile(e.parameter['page'])
    .evaluate()
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

/**
 * Used to get HTML for Google Suites App
 * Treat like importing
 * @param {*} filename
 * @return {String}
 */
function getContent(filename) {
  var htmlFile = HtmlService.createTemplateFromFile(filename).getRawContent();
  return htmlFile;
}
