try {
  var mobile = require('is-mobile-browser');
} catch (e) {
  var mobile = require('..');
}

var assert = require('assert');

describe('is-mobile-browser', function(){
  it('should detect mobile browser', function () {
    // iPhone 4
    assert(mobile('Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_2_1 like Mac OS X; en-us) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8C148 Safari/6533.18.5'))
    // iPhone 5
    assert(mobile('Mozilla/5.0 (iPhone; CPU iPhone OS 7_0 like Mac OS X; en-us) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11A465 Safari/9537.53'))
    // iPhone 6
    assert(mobile('Mozilla/5.0 (iPhone; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/600.1.3 (KHTML, like Gecko) Version/8.0 Mobile/12A4345d Safari/600.1.4'))
    // Samsung Galaxy S4
    assert(mobile('Mozilla/5.0 (Linux; Android 4.2.2; GT-I9505 Build/JDQ39) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.59 Mobile Safari/537.36'))
  })
  it('should not detect desktop browsers', function () {
    // Mac Chrome
    assert(!mobile('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.99 Safari/537.36'))
    // Internet Explorer
    assert(!mobile('Mozilla/5.0 (Macintosh; Intel Mac OS X 10.10; rv:34.0) Gecko/20100101 Firefox/34.0'))
    // Mac Firefox
    assert(!mobile('Mozilla/5.0 (Windows NT 6.1; Trident/7.0; rv:11.0) like Gecko'))
  })
});