/**
 * @description 质控方案
 */
import { request as getDangAnGZCountByZKND } from './getDangAnGZCountByZKND';
import { request as getDangAnZKFANDList } from './getDangAnZKFANDList';
import { request as getFangAnGZByID } from './getFangAnGZByID';
import { request as getFangAnMXGZ } from './getFangAnMXGZ';
import { request as getFangAnQJGZ } from './getFangAnQJGZ';
import { request as getFangAnXXList } from './getFangAnXXList';
import { request as qiTingYFangAn } from './qiTingYFangAn';
import { request as qiTingYFangAnGZ } from './qiTingYFangAnGZ';
import { request as saveFangAn } from './saveFangAn';
import { request as setKouFenZhi } from './setKouFenZhi';
import { request as zuoFeiFangAn } from './zuoFeiFangAn';

export default {
  getDangAnGZCountByZKND,
  getDangAnZKFANDList,
  getFangAnGZByID,
  getFangAnMXGZ,
  getFangAnQJGZ,
  getFangAnXXList,
  qiTingYFangAn,
  qiTingYFangAnGZ,
  saveFangAn,
  setKouFenZhi,
  zuoFeiFangAn,
};
