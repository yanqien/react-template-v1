/**
 * @description 质控规则
 */
import { request as getGuiZeXXByGZIDS } from './getGuiZeXXByGZIDS';
import { request as getZhiKongGZByID } from './getZhiKongGZByID';
import { request as getZhiKongGZByZDBM } from './getZhiKongGZByZDBM';
import { request as getZhiKongGZSelectList } from './getZhiKongGZSelectList';
import { request as getZhiKongMXGZ } from './getZhiKongMXGZ';
import { request as getZhiKongQJGZ } from './getZhiKongQJGZ';
import { request as qiTingYGZ } from './qiTingYGZ';
import { request as saveZhiKongGZ } from './saveZhiKongGZ';
import { request as zuoFeiZhiKongGZ } from './zuoFeiZhiKongGZ';

export default {
  getGuiZeXXByGZIDS,
  getZhiKongGZByID,
  getZhiKongGZByZDBM,
  getZhiKongGZSelectList,
  getZhiKongMXGZ,
  getZhiKongQJGZ,
  qiTingYGZ,
  saveZhiKongGZ,
  zuoFeiZhiKongGZ,
};
