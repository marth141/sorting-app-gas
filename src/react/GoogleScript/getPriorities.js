/**
 * Used to get first announcement
 * @return {String}
 */
function getOriginalPriorityList() {
  var message = SpreadsheetApp.openById(
    "1_Pu_mTwmvzUI3QMJ2Zn9ax7q9sq-DPW4ECKxxuGNW7w"
  )
    .getSheetByName("Sheet1")
    .getRange("A:A")
    .getValues()
    .filter(function(array) {
      return array[0] !== "";
    });
  return message;
}

/**
 * Used to get second announcement
 * @return {String}
 */
function getSecondAnnouncement() {
  var message = SpreadsheetApp.openById(
    "1_Pu_mTwmvzUI3QMJ2Zn9ax7q9sq-DPW4ECKxxuGNW7w"
  )
    .getSheetByName("Sheet1")
    .getRange("A2")
    .getValue();
  return message;
}

/**
 * Used to get third announcement
 * @return {String}
 */
function getThirdAnnouncement() {
  var message = SpreadsheetApp.openById(
    "1_Pu_mTwmvzUI3QMJ2Zn9ax7q9sq-DPW4ECKxxuGNW7w"
  )
    .getSheetByName("Sheet1")
    .getRange("A3")
    .getValue();
  return message;
}
