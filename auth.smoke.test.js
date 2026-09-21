const { login } = require('./auth');

describe('Quality Gate 1 - Smoke Test Suite', () => {
  test('Đăng nhập thành công với admin/123', () => {
    expect(login('admin', '123')).toBe(true);
  });
});
