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
  
  dialog.saveAs = function(callback) {
    var dialog = document.createElement('input');
    dialog.type = 'file';
    dialog.nwsaveas = '';
    callDialog(dialog, callback);
  };
  
  dialog.open = function(callback) {
    var dialog = document.createElement('input');
    dialog.type = 'file';
    callDialog(dialog, callback);
  };
  
  return dialog;
}]);