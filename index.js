var Qwm = require('qw');

function Qw($config) {
    Qwm.setOpts('supressInitMessages', true);
    Qwm.config($config||{});
}

Qw.prototype.log = function (inst) {
    return Qwm.log(inst);
};
Qw.prototype.$config = Qwm.config;


module.exports = Qw;