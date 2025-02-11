/**
 * @description 质控权重
 */
import { request as addQuanZhong } from './addQuanZhong';
import { request as chuShiHuaQuanZhongGZ } from './chuShiHuaQuanZhongGZ';
import { request as gengXinQuanZhongGZ } from './gengXinQuanZhongGZ';
import { request as getQuanZhongGZByQZID } from './getQuanZhongGZByQZID';
import { request as getQuanZhongXXByID } from './getQuanZhongXXByID';
import { request as getQuanZhongXXList } from './getQuanZhongXXList';
import { request as updateQuXiaoRY } from './updateQuXiaoRY';
import { request as updateQuXiaoYCY } from './updateQuXiaoYCY';
import { request as updateYuChuYuan } from './updateYuChuYuan';
import { request as quanZhongZJSForJob } from './quanZhongZJSForJob';
import { request as saveQuanZhongGZ } from './saveQuanZhongGZ';
import { request as updateQuanZhong } from './updateQuanZhong';
import { request as zuoFeiQuanZhong } from './zuoFeiQuanZhong';
import { request as zuoFeiQuanZhongGZ } from './zuoFeiQuanZhongGZ';

export default {
  addQuanZhong,
  chuShiHuaQuanZhongGZ,
  gengXinQuanZhongGZ,
  getQuanZhongGZByQZID,
  getQuanZhongXXByID,
  getQuanZhongXXList,
  updateQuXiaoRY,
  updateQuXiaoYCY,
  updateYuChuYuan,
  quanZhongZJSForJob,
  saveQuanZhongGZ,
  updateQuanZhong,
  zuoFeiQuanZhong,
  zuoFeiQuanZhongGZ,
};
