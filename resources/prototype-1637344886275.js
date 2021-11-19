jQuery("#simulation")
;(function(window, undefined) {
  var dictionary = {
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Screen 1",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);(function(window, undefined) {
  var dictionary = {
  };

  window.jimDevelopers.lookUpSlice = function(name) {
    var imageName;
    if(dictionary.hasOwnProperty(name)) { /* search by name */
      imageName = dictionary[name];
    }
    return imageName;
  };
})(window);	window.widgets = {
		descriptionMap : widgetDescriptionMap = {},
		rootWidgetMap : widgetRootMap = {}
	};

	widgets.descriptionMap[["s-8f0e5230", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-8f0e5230", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_57", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_57", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-790203f4", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-790203f4", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_58", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_58", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-2c0ef272", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-2c0ef272", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_59", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_59", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-926438ae", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-926438ae", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_137", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_137", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-8f0e5230", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-8f0e5230", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_57", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_57", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-790203f4", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-790203f4", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_58", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_58", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-8f25ad85", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-8f25ad85", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_134", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_134", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-3140dfd3", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-3140dfd3", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_138", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_138", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-8f0e5230", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-8f0e5230", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_57", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_57", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-790203f4", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-790203f4", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_58", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_58", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-5022012f", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-5022012f", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_131", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_131", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-1414a909", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-1414a909", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_139", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_139", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-8f0e5230", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-8f0e5230", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_57", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_57", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-790203f4", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-790203f4", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_58", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_58", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-d43c4a13", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-d43c4a13", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_135", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_135", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-aa80a82b", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-aa80a82b", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_140", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_140", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-8f0e5230", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-8f0e5230", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_57", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_57", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-790203f4", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-790203f4", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_58", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_58", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-4692ec9b", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-4692ec9b", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_129", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_129", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-c7ef292b", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-c7ef292b", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_141", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_141", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-8f0e5230", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-8f0e5230", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_57", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_57", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-790203f4", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-790203f4", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_58", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_58", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-f33ff8a6", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-f33ff8a6", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_136", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_136", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-a3b5dc28", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-a3b5dc28", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_142", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_142", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-8f0e5230", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-8f0e5230", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_57", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_57", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-790203f4", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-790203f4", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_58", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_58", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-4efe11d2", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-4efe11d2", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_130", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_130", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-c5ed4edc", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-c5ed4edc", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_143", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_143", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-8f0e5230", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-8f0e5230", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_57", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_57", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-790203f4", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-790203f4", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_58", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_58", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-17b9d8d5", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-17b9d8d5", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_127", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_127", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-7c0f7e2e", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-7c0f7e2e", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_144", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_144", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-8f0e5230", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-8f0e5230", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_57", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_57", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-790203f4", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-790203f4", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_58", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_58", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-03283017", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-03283017", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_133", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_133", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-9a437e85", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-9a437e85", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_145", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_145", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-8f0e5230", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-8f0e5230", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_57", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_57", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-790203f4", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-790203f4", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_58", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_58", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-e682f98b", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-e682f98b", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_128", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_128", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-6975e8cd", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-6975e8cd", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_146", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_146", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-8f0e5230", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-8f0e5230", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_57", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_57", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-790203f4", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-790203f4", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_58", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_58", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-a36c7fac", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-a36c7fac", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_149", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_149", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-95228bd3", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-95228bd3", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_150", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_150", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-8f0e5230", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-8f0e5230", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_57", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_57", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-790203f4", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-790203f4", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_58", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_58", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-c299b555", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-c299b555", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_132", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_132", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-b5b3f779", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-b5b3f779", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_147", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_147", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-8f0e5230", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-8f0e5230", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_57", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_57", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-790203f4", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-790203f4", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_58", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_58", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-4061c185", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-4061c185", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_148", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_148", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-47a0776b", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-47a0776b", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_151", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_151", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-8f0e5230", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-8f0e5230", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_57", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_57", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-0c76412e", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-0c76412e", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_60", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_60", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-aa15be65", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-aa15be65", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_61", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_61", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-aa15be65", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-aa15be65", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Text_cell_61", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Text_cell_61", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Bordered", "s-Table_1"]; 

	widgets.descriptionMap[["s-Paragraph_7", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Paragraph_7", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Paragraph", "s-Paragraph_7"]; 

	widgets.descriptionMap[["s-Paragraph_17", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Paragraph_17", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Top bar 1", "s-Top_Bar-1"]; 

	widgets.descriptionMap[["s-Image_27", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Image_27", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Top bar 1", "s-Top_Bar-1"]; 

	widgets.descriptionMap[["s-Paragraph_18", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ""; 

			widgets.rootWidgetMap[["s-Paragraph_18", "d12245cc-1680-458d-89dd-4f0d7fb22724"]] = ["Top bar 1", "s-Top_Bar-1"]; 

	