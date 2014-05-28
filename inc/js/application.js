System.register("../es6/app", [], function() {
  "use strict";
  var __moduleName = "../es6/app";
  console.log('loaded app.js');
  window.App = function() {
    console.log('hi from app.js');
  };
  return {};
});
System.get("../es6/app" + '');
System.register("../es6/moduleA/index", [], function() {
  "use strict";
  var __moduleName = "../es6/moduleA/index";
  console.log('loaded moduleA/index.js');
  window.moduleA = function() {
    console.log('hi from moduleA/index.js');
  };
  return {};
});
System.get("../es6/moduleA/index" + '');
System.register("../es6/moduleB/index", [], function() {
  "use strict";
  var __moduleName = "../es6/moduleB/index";
  console.log('loaded moduleB/index.js');
  window.moduleB = function() {
    console.log('hi from moduleB/index.js');
  };
  return {};
});
System.get("../es6/moduleB/index" + '');
System.register("../es6/moduleC/index", [], function() {
  "use strict";
  var __moduleName = "../es6/moduleC/index";
  console.log('loaded moduleC/index.js');
  window.moduleC = function() {
    console.log('hi from moduleC/index.js');
  };
  return {};
});
System.get("../es6/moduleC/index" + '');
System.register("../es6/moduleA/module-a-controller", [], function() {
  "use strict";
  var __moduleName = "../es6/moduleA/module-a-controller";
  console.log('loaded moduleA/controller');
  window.moduleAController = function() {
    console.log('hi from moduleA/controller');
  };
  return {};
});
System.get("../es6/moduleA/module-a-controller" + '');
System.register("../es6/moduleA/module-a-service", [], function() {
  "use strict";
  var __moduleName = "../es6/moduleA/module-a-service";
  console.log('loaded moduleA/service');
  window.moduleAService = function() {
    console.log('hi from moduleA/service');
  };
  return {};
});
System.get("../es6/moduleA/module-a-service" + '');
System.register("../es6/moduleB/module-b-controller", [], function() {
  "use strict";
  var __moduleName = "../es6/moduleB/module-b-controller";
  console.log('loaded moduleB/controller');
  window.moduleBController = function() {
    console.log('hi from moduleB/controller');
  };
  return {};
});
System.get("../es6/moduleB/module-b-controller" + '');

//# sourceMappingURL=application.map
