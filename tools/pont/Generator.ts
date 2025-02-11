// @ts-nocheck
import {
  Interface,
  CodeGenerator,
  Mod,
  Property,
  FileStructures as BaseFileStructures,
} from 'pont-engine';
import { reviseModName } from 'pont-engine/lib/utils';

import { isObject } from 'lodash';

function isApi(obj) {
  if (isObject(obj) && isObject(obj['mods'])) {
    return obj['mods'];
  }
  return obj;
}

function deleteFiles(obj) {
  for (const key in obj) {
    if (key === 'api.d.ts' || key === 'baseClass.js') {
      delete obj[key];
    } else if (isObject(obj[key])) {
      obj[key] = isApi(obj[key]);
      deleteFiles(obj[key]);
    }
  }
}

const basePath = {
  zhikong: '/mediinfo-vela-zhikong',
  gongyong: '/mediinfo-lyra-gongyong',
};

export class FileStructures extends BaseFileStructures {
  getFileStructures() {
    const result = super.getFileStructures();

    delete result['pontCore.js'];
    delete result['pontCore.d.ts'];

    return result;
  }

  getOriginFileStructures(generator, usingMultipleOrigins?: boolean): any {
    const { mods, ...obj } = super.getOriginFileStructures(
      generator,
      usingMultipleOrigins,
    );

    deleteFiles(obj);

    return { ...obj, ...mods };
  }

  getMultipleOriginsFileStructures() {
    const files = super.getMultipleOriginsFileStructures();

    deleteFiles(files);

    return files;
  }

  getDataSourcesTs() {
    const dsNames = this.getMultipleOriginsDataSourceName();
    return `
  ${dsNames
    .map((name) => {
      return `import ${name} from './${name}';
      `;
    })
    .join('\n')}

  export {
    ${dsNames.join(',\n')}
  }
`;
  }
}

export default class Generator extends CodeGenerator {
  /**
   * 生成 service 入口文件
   *
   * 单个 api 的导出
   */
  getIndex() {
    return `
      import mods from './mods'

      export default mods
    `;
  }

  /**
   * 生成所有 api 模块的入口文件
   *
   * 单个 api s的分组导出
   */
  getModsIndex() {
    const dataSource = this.dataSource;

    const modsImports = [];
    const modsExports = [];

    dataSource.mods.forEach((mod) => {
      const modName = reviseModName(mod.name);
      modsImports.push(`import ${modName} from './${modName}';`);
      modsExports.push(modName);
    });

    // console.log(dataSource.mods)
    return `
    ${modsImports.join('\n')}

    export default {
      ${modsExports.join(', \n')}
    }
  `;
  }

  getModIndex(mod: Mod) {
    return `
    /**
     * @description ${mod.description}
     */
    ${mod.interfaces
      .map(
        (inter) => `import {request as ${inter.name}} from './${inter.name}';`,
      )
      .join('\n')}

    export default {
      ${mod.interfaces.map((inter) => inter.name).join(', \n')}
    }
  `;
  }

  /**
   * 生成单个接口内容
   *
   * @param inter API
   *
   * @return 接口内容
   */
  getInterfaceContent(inter: Interface) {
    const parameters = inter.parameters;
    const method = inter.method.toUpperCase();
    const fileName = this.dataSource.name;
    if (basePath[fileName] && inter.path.indexOf(basePath[fileName]) === -1) {
      inter.path = basePath[fileName] + inter.path;
    }
    // console.log(this.dataSource.name, 'inter.context.dataSource.name')
    // 请求参数
    const paramsArgs: Property[] = [];

    // 表单数据
    const bodyArgs: Property[] = [];

    parameters.forEach((param) => {
      if (param.in === 'query' || param.in === 'path') {
        paramsArgs.push(param);
      } else if (param.in === 'formData' || param.in === 'body') {
        bodyArgs.push(param);
      } else if (param.in === 'header') {
        // 后端写法不规范
        bodyArgs.push(param);
      }
    });

    if (method === 'POST' || method === 'PUT') {
      // 纯请求参数
      const queryArgs: Property[] = paramsArgs.filter((p) => p.in === 'query');

      if (queryArgs.length > 0) {
        return `
        import http from '@/lib/http'
        import { toURL } from '@/lib/util'

        /**
         * ${inter.description}
         * @param {Object} formData
         * @param {import('axios').AxiosRequestConfig} config axios 可选配置
         * @return {Promise<*>}
         */
        export function request(data, config) {
          data = data || {}
          const url = toURL("${inter.path}", data)
          return http.request({ url, method: '${method}', data, ...config });
        }
       `;
      } else {
        return `
        import http from '@/lib/http'
        import { toURL } from '@/lib/util'
        /**
         * ${inter.description}
         * @param {Object} data
         * @param {import('axios').AxiosRequestConfig} config axios 可选配置
         * @return {Promise<*>}
         */
        export function request(data, config) {
          data = data || {}
          const url = toURL("${inter.path}", data)
          return http.request({ url, method: '${method}', data, ...config });
        }
       `;
      }
    }

    return `
    import http from '@/lib/http'
    import { toURL } from '@/lib/util'

    /**
     * ${inter.description}
     *
     * @param {Object} params
     ${paramsArgs
       .map((p) => ` * @param {string} params.${p.name} ${p.description || ''}`)
       .join('\n')}
     * @param {import('axios').AxiosRequestConfig} config axios 可选配置
     *
     * @return {Promise<*>}
     */
    export function request(params, config) {
      params = params || {}
      const url = toURL("${inter.path}", params)
      return http.request({ url,method: '${method}', params, ...config });
    }
   `;
  }
}
