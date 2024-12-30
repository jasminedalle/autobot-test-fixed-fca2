var _0xb00422 = _0x592a, login = require('../index.js'), fs = require('fs'), assert = require(_0xb00422(0x1e7)), conf = JSON['parse'](process[_0xb00422(0x1e1)][_0xb00422(0x1e9)] || fs[_0xb00422(0x1e4)]('test/test-config.json', _0xb00422(0x1e8))), credentials = {
        'email': conf[_0xb00422(0x1e3)][_0xb00422(0x1e5)],
        'password': conf[_0xb00422(0x1e3)][_0xb00422(0x1e0)]
    }, userIDs = conf['userIDs'], options = {
        'selfListen': !![],
        'listenEvents': !![],
        'logLevel': _0xb00422(0x1e6),
        'pageID': conf[_0xb00422(0x1e2)]
    }, getType = require('../utils')[_0xb00422(0x1ea)], userID = conf[_0xb00422(0x1e3)]['id'], groupChatID, groupChatName;
function _0x592a(_0x3ce5da, _0x9e6518) {
    var _0x592ad4 = _0x9e65();
    return _0x592a = function (_0x3e5e28, _0x61e510) {
        _0x3e5e28 = _0x3e5e28 - 0x1e0;
        var _0x3cdb5e = _0x592ad4[_0x3e5e28];
        return _0x3cdb5e;
    }, _0x592a(_0x3ce5da, _0x9e6518);
}
function checkErr(_0x130e56) {
    return function (_0x5a0d14) {
        if (_0x5a0d14)
            _0x130e56(_0x5a0d14);
    };
}
function _0x9e65() {
    var _0xdc0d4d = [
        'password',
        'env',
        'pageID',
        'user',
        'readFileSync',
        'email',
        'silent',
        'assert',
        'utf8',
        'testconfig',
        'getType'
    ];
    _0x9e65 = function () {
        return _0xdc0d4d;
    };
    return _0x9e65();
}
