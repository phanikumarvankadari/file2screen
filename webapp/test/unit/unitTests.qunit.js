/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/local/file/to/screen/File2Screen/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});