
'use strict';

var p5 = require('./core/core');
require('./color/p5.Color');
require('./core/p5.Element');
require('./typography/p5.Font');
require('./core/p5.Graphics');
require('./core/p5.Renderer2D');

require('./image/p5.Image');
require('./math/p5.Vector');
require('./io/p5.TableRow');
require('./io/p5.Table');
require('./io/p5.XML');

require('./color/creating_reading');
require('./color/setting');
require('./core/constants');
require('./utilities/conversion');
require('./utilities/array_functions');
require('./utilities/string_functions');
require('./core/environment');
require('./image/image');
require('./image/loading_displaying');
require('./image/pixels');
require('./io/files');
require('./events/keyboard');
require('./events/acceleration'); //john
require('./events/mouse');
require('./utilities/time_date');
require('./events/touch');
require('./math/math');
require('./math/calculation');
require('./math/random');
require('./math/noise');
require('./math/trigonometry');
require('./core/rendering');
require('./core/2d_primitives');

require('./core/attributes');
require('./core/curves');
require('./core/vertex');
require('./core/structure');
require('./core/transform');
require('./typography/attributes');
require('./typography/loading_displaying');

require('./webgl/p5.RendererGL');
require('./webgl/p5.Geometry');
require('./webgl/p5.RendererGL.Retained');
require('./webgl/p5.RendererGL.Immediate');
require('./webgl/primitives');
require('./webgl/loading');
require('./webgl/p5.Matrix');
require('./webgl/material');
require('./webgl/light');
require('./webgl/shader');
require('./webgl/camera');
require('./webgl/interaction');

/**
 * _globalInit
 *
 * TODO: ???
 * if sketch is on window
 * assume "global" mode
 * and instantiate p5 automatically
 * otherwise do nothing
 *
 * @return {Undefined}
 */
var _globalInit = function() {
  if (!window.PHANTOMJS && !window.mocha) {
    // If there is a setup or draw function on the window
    // then instantiate p5 in "global" mode
    if(((window.setup && typeof window.setup === 'function') ||
       (window.draw && typeof window.draw === 'function')) &&
       !p5.instance) {
      new p5();
    }
  }
};

// TODO: ???
if (document.readyState === 'complete') {
  _globalInit();
} else {
  window.addEventListener('load', _globalInit , false);
}

module.exports = p5;
