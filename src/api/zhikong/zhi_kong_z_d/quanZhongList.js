import http from '@/lib/http';
import { toURL } from '@/lib/util';

/**
     * 权重下拉
     *
     * @param {Object} params
     
     * @param {import('axios').AxiosRequestConfig} config axios 可选配置
     *
     * @return {Promise<*>}
     */
export function request(params, config) {
  params = params || {};
  const url = toURL(
    '/mediinfo-vela-zhikong/api/v1.0/zhikongzd/quanZhongList',
    params,
  );
  return http.request({ url, method: 'GET', params, ...config });
}
