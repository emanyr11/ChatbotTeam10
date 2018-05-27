// This file is required by karma.conf.js and loads recursively all the .spec and framework files
import 'zone.js/dist/jasmine-patch';
import 'zone.js/dist/async-test';
import 'zone.js/dist/proxy.js';
import 'zone.js/dist/sync-test';
import 'zone.js/dist/fake-async-test';
import 'zone.js/dist/long-stack-trace-zone';


import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

// Being there's no typing for the `__karma__` variable. It is decleared as any.
declare const __karma__: any;
declare const require: any;

// Stop Karma from running early.
__karma__.loaded = function () {};

// initializes the Angular testing environment.
getTestBed().initTestEnvironment
(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

// Finding the tests.
const context = require.context('./', true, /\.spec\.ts$/);
// Then load modules.
context.keys().map(context);
// Finally, run the tests.
__karma__.start();
