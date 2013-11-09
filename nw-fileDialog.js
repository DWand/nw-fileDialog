angular.module('DWand.nw-fileDialog', [])
.factory('fileDialog', [function(){
  var callDialog = function(dialog, callback) {
    dialog.addEventListener('change', function() {
      var result = dialog.value;
      callback(result);
    }, false);
    dialog.click();
  };

  var dialog = {};
  
  dialog.saveAs = function(callback, defaultFilename) {
    var dialog = document.createElement('input');
    dialog.type = 'file';
    dialog.nwsaveas = defaultFilename || '';
    callDialog(dialog, callback);
  };
  
  dialog.openFile = function(callback, multiple) {
    var dialog = document.createElement('input');
    dialog.type = 'file';
    if (multiple === true) {
      dialog.multiple = 'multiple';
    }
    callDialog(dialog, callback);
  };
  
  dialog.openDir = function(callback) {
    var dialog = document.createElement('input');
    dialog.type = 'file';
    dialog.nwdirectory = 'nwdirectory';
    callDialog(dialog, callback);
  };
  
  return dialog;
}]);