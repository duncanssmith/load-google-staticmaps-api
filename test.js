const test = require('tape')
const loadGoogleStaticMapsApi = require('./')

test('resolves the promise to the `googleMaps` object', function (t) {
  t.plan(1)
  loadGoogleStaticMapsApi().then(function (googleMaps) {
    t.true(typeof googleStaticMaps.Map === 'function')
  }, t.fail)
})

test('resolves the promise to the `googleStaticMaps` object, with support for duplicate calls', function (t) {
  t.plan(2)
  const promises = [loadGoogleStaticMapsApi(), loadGoogleStaticMapsApi()]
  Promise.all(promises).then(function (values) {
    t.equal(values[0], values[1])
    t.true(typeof values[0].Map === 'function')
  }, t.fail)
})
