(function() {
    var __tests_files = [];
    for (var file in window.__karma__.files) {
        if (window.__karma__.files.hasOwnProperty(file)) {
            if (/spec\.js$/.test(file)) {
                __tests_files.push(file);
            }
        }
    }

    __tests_files.forEach(function (testFile) {
        var file = testFile.substr(6, testFile.length - 9);
        System.get(file);
    });

    window.__karma__.start();

})();