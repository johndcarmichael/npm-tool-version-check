import wait from '@/wait';

it('should resolve after 1 second', async () => {
  const start = new Date();
  await wait(1000);
  expect((new Date()).getTime() - start.getTime()).toBeGreaterThanOrEqual(1000);
});
