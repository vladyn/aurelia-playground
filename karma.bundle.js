import 'aurelia-polyfills';
import 'aurelia-loader-webpack';
import { install as installJasmineAsync } from 'jest-jasmine2/jasmine-async';

// enable running Promise-returning tests:
installJasmineAsync(global);

// disable stacktrace limit so we do not loose any error information
Error.stackTraceLimit = Infinity;

// load and run tests:
const testModuleContexts = loadTestModules();
runTests(testModuleContexts);

function loadTestModules() {
  const srcContext = require.context(
    // directory:
    './test/unit',
    // recursive:
    true,
    // tests in /src folder regex:
    /\.spec\.[tj]s$/im
  );

  return [srcContext];
}

function runTests(contexts) {
  contexts.forEach(requireAllInContext);
}

function requireAllInContext(requireContext) {
  return requireContext.keys().map(requireContext);
}
