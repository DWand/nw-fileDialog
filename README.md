# nw-fileDialog


## What is it

This is a simple module for node-webkit applications written with AngularJS. It provides a service 
called `fileDialog` which allows you to show the user file dialogs like "save as" or "open file".
You can find more information in the
[File dialogs](https://github.com/rogerwang/node-webkit/wiki/File-dialogs)
section of node-webkit's wiki.

This module allows you to
- Call "Save as" dialog
- Call "Open file" dialog
- Call "Open directory" dialog
- Provide filters by file types
- Allow user to select multiple files
- Specify a default name for the file


## Dependencies

1. [AngularJS](http://angularjs.org/)
2. [node-webkit](https://github.com/rogerwang/node-webkit)


## Usage

1. Include the script into your HTML document after the AngularJS.
```hmtl
<script src="path/to/the/angular.js"></script>
<script src="path/to/the/nw-fileDialog.js"></script>
<script src="path/to/the/your-app-code.js"></script>
```

2. Inject `nw-fileDialog` as dependency into your module.
```js
var app = angular.module('app', ['DWand.nw-fileDialog']);
```

3. Use the provided `fileDialog` service
```js
app.controller('SomeCtrl', ['$scope', 'fileDialog', function($scope, fileDialog) {
    $scope.saveFile = function() {
      fileDialog.saveAs(function(filename) {
        // your code
      });
    };
}]);
```


## API

#### fileDialog.saveAs(callback, defaultFilename, acceptTypes)

Opens the "save as" dialog, which allows the user to input a name of the file to be saved.

_**callback**_ - *function* - function, which will be called if the user enters a name of the file to 
save and clicks OK button. Required interface: `function(filename)`.

_**defaultFilename**_ - *string* - a default name of the file. Can be omitted by setting false.

_**acceptTypes**_ - *string/array* - an array of accepted file types. See
[HTML5 specification](http://www.w3.org/TR/html-markup/input.file.html#input.file.attrs.accept).


#### fileDialog.openFile(callback, multiple, acceptTypes)

Opens the "open file" dialog, which allows the user to choose some file.

_**callback**_ - *function* - function, which will be called if the user choose the file and clicks OK
button. Required interface: `function(filename)`.

_**multiple**_ - *boolean* - a flag which the user to select multiple files. Default = false.

_**acceptTypes**_ - *string/array* - an array of accepted file types. See
[HTML5 specification](http://www.w3.org/TR/html-markup/input.file.html#input.file.attrs.accept).


#### fileDialog.openDir (callback)

Opens the "open directory" dialog, which allows the user to choose some directory.

_**callback**_ - *function* - function, which will be called if the user choose the directory and 
clicks OK button. Required interface: `function(dirname)`.


### Important note

Please, keep in mind that there is no warranty that the callback function will be called each time
you call any of the provided methods. If the user clicks the Cancel button the callback **will not**
be called!


## License

Copyright &copy; 2013 Max Prichinenko <dwand.dev@gmail.com>

This work is free. You can redistribute it and/or modify it under the terms of the Do What The Fuck
You Want To Public License, Version 2, as published by Sam Hocevar. See the 
[COPYING](https://github.com/DWand/nw-fileDialog/blob/master/COPYING) file for more details.


[![WTFPL](http://www.wtfpl.net/wp-content/uploads/2012/12/wtfpl-badge-4.png)](http://wtfpl.net)
