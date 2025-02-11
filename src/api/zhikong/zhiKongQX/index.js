/**
 * @description 质控权限
 */
import { request as addQueXian } from './addQueXian';
import { request as addQueXianList } from './addQueXianList';
import { request as getBiHuanList } from './getBiHuanList';
import { request as getFangAnList } from './getFangAnList';
import { request as getMoRenFAXX } from './getMoRenFAXX';
import { request as getQueXianGZList } from './getQueXianGZList';
import { request as getZhiKongYXLList } from './getZhiKongYXLList';
import { request as updateQueXian } from './updateQueXian';
import { request as updateQueXianZT } from './updateQueXianZT';
import { request as zuoFeiQueXian } from './zuoFeiQueXian';

export default {
  addQueXian,
  addQueXianList,
  getBiHuanList,
  getFangAnList,
  getMoRenFAXX,
  getQueXianGZList,
  getZhiKongYXLList,
  updateQueXian,
  updateQueXianZT,
  zuoFeiQueXian,
};
