!function(W)
{ "use strict";

  function g() { }

  g.prototype.acquire = function(tryonly) {
    return new Promise(async (res) => {
      var release;
      if (!tryonly || !this.locked) {
        while (this.locked)
          await this.locked;
        this.locked = new Promise(res => {
          release = () => {
            this.locked = 0;
            res();
          };
        });
      }
      res(release);
    });
  };

  if (typeof define == "function" && define.amd)
    define("mutexlight", [], g);
  else if (W.exports)
    W.exports.mutexlight = g;
  else if (module.exports)
    module.exports = g;
  else
    W.mutexlight = g;
}(typeof window == "object" ? window : global);
