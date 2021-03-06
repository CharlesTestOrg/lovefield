/**
 * @license
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
goog.setTestOnly();
goog.provide('lf.testing.Capability');

goog.require('goog.userAgent');
goog.require('goog.userAgent.product');



/**
 * Capability object based on browser version.
 * @constructor
 */
lf.testing.Capability = function() {
  /** @type {boolean} */
  this.memoryDbOnly = goog.userAgent.product.SAFARI ||
      (goog.userAgent.product.IE && !goog.userAgent.isVersionOrHigher(10));
};


/** @return {!lf.testing.Capability} */
lf.testing.Capability.get = function() {
  return new lf.testing.Capability();
};
