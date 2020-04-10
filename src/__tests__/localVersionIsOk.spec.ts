import localVersionIsOk from '@/localVersionIsOk';

it('should pass', function () {
  expect(localVersionIsOk('1.0.0', '1.0.0')).toBe(true);
});
