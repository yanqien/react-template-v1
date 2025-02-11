// @ts-nocheck
/**
 * 删除对象的 key 并且返回值
 *
 * @param {Object} obj
 * @param {string} key
 *
 * @returns
 */
export function popKey(obj, key) {
  const value = obj[key];
  if (value !== undefined) {
    delete obj[key];
  }
  return value;
}
/**
 * URL 编译
 *
 * @example
 *
 * toURL('/api/v{version}/users', { version: '1' })
 * // -> /api/v1/users
 *
 * @param {String} path
 * @param {Object} params
 * @return url
 */
export function toURL(path, params = {}) {
  if (path.indexOf("{") === -1) return path;
  return path.replace(/{([^\}]*(?:\.[^\}]*)*)}/gm, (_, key) => {
    const value = popKey(params, key.trim());
    if (value === undefined) {
      console.warn("Please set value for template key: ", key);
    }
    return value || "";
  });
}
