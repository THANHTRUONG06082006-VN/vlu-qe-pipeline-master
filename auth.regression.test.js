const { login } = require('./auth');

describe('Quality Gate 2 - Regression Test Suite', () => {
  test('1. Đăng nhập thành công với admin/123', () => {
    expect(login('admin', '123')).toBe(true);
  });

  test('2. Sai mật khẩu trả về false', () => {
    expect(login('admin', 'wrongpass')).toBe(false);
  });

  test('3. Username rỗng trả về false', () => {
    expect(login('', '123')).toBe(false);
  });

  test('4. Mật khẩu rỗng trả về false', () => {
    expect(login('admin', '')).toBe(false);
  });

  test('5. Tài khoản bị khóa trả về false', () => {
    expect(login('locked_user', '123')).toBe(false);
  });
});
