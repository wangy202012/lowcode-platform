import { material, project } from '@alilc/lowcode-engine';
import { filterPackages } from '@alilc/lowcode-plugin-inject'
import { Message, Dialog } from '@alifd/next';
import { TransformStage } from '@alilc/lowcode-types';
import schema from './schema.json';
import { updateSchema, getSchema } from "../api/index";
import utils from '../utils'

export const saveSchema = async (scenarioName: string = 'unknown',ext?:any) => {
   await setProjectSchemaRemote(ext);
};

export const resetSchema = async (scenarioName: string = 'unknown') => {
    try {
        await new Promise<void>((resolve, reject) => {
            Dialog.confirm({
                content: '确定要重置吗？您所有的修改都将消失！',
                onOk: () => {
                    resolve();
                },
                onCancel: () => {
                    reject()
                },
            })
        })
    } catch (err) {
        return;
    }

    let defaultSchema = schema || {
        componentsTree: [{ componentName: 'Page', fileName: 'sample' }],
        componentsMap: material.componentsMap,
        version: '1.0.0',
        i18n: {},
    };

    project.getCurrentDocument()?.importSchema(defaultSchema as any);
    project.simulatorHost?.rerender();

    setProjectSchemaRemote();
    await setPackagesToLocalStorage(scenarioName);
    Message.success('成功重置页面');
}

const getLSName = (scenarioName: string, ns: string = 'projectSchema') => `${scenarioName}:${ns}`;

export const getProjectSchemaFromLocalStorage = (scenarioName: string) => {
    if (!scenarioName) {
        console.error('scenarioName is required!');
        return;
    }
    return JSON.parse(window.localStorage.getItem(getLSName(scenarioName)) || '{}');
}


export const getProjectSchemaRemote = async (scenarioName: string) => {
    if (!scenarioName) {
        console.error('scenarioName is required!');
        return;
    }
    const arr = document.location.hash.split('=')
    const appId  =utils.getAppId()

    

    const ret = await getSchema(appId)
    console.log('[从服务器上获取的页面数据]:',ret)
    const content =  utils.decodeSchema(ret?.data?.content)
    return content.projectSchema
}


const myFilterPackages = (packages:any,projectSchema:any)=>{
    // 查看是否有lowcode-chart-components 
 

    const hasChart = (projectSchema?.componentsMap || []).find((item:any)=>item.package === 'lowcode-chart-components')
    if(!hasChart){
        // 没有的话，就把package的删掉
        packages = packages.filter((item:any)=>item.package !== 'lowcode-chart-components')
    };

    const hasBase = (projectSchema?.componentsMap || []).find((item:any)=>item.package === 'lowcode-base-components')
    if(!hasBase){
        // 没有的话，就把package的删掉
        packages = packages.filter((item:any)=>item.package !== 'lowcode-base-components')
    };
    return {packages,projectSchema}
}

const setProjectSchemaRemote =async (ext?:any) => {
 
 
 
    const appId = utils.getAppId()
    const originPkgs = material.getAssets().packages
    const packages = await filterPackages(originPkgs);
    const projectSchema = project.exportSchema(TransformStage.Save)


 
    // 存储物料也页面信息
    let content = utils.encodeSchema(myFilterPackages(packages,projectSchema))
       // 导入导出hack方式
    // @ts-ignore
    if(window._lc_in_) {
        // @ts-ignore
        content = window._lc_in_
        console.log('=================本次保存使用了window变量==================')
    }
    // localStorage中保存，便于调试
    localStorage.setItem(`_lowcode_page_content_${appId}_`,content)
    // 导入导出hack方式
    // @ts-ignore
    window._lc_out_ = content
 
    updateSchema(appId, content, ext).then(rst => {
        if (rst.data) {
            Message.success('成功保存');
        } else {
            Message.error('保存失败')
        }
    }).catch(e => {
        Message.error('保存失败')
    })
}

const setPackagesToLocalStorage = async (scenarioName: string) => {
    if (!scenarioName) {
        console.error('scenarioName is required!');
        return;
    }
    const packages = await filterPackages(material.getAssets().packages);
    window.localStorage.setItem(
        getLSName(scenarioName, 'packages'),
        JSON.stringify(packages),
    );
}

export const getPackagesFromLocalStorage = (scenarioName: string) => {
    if (!scenarioName) {
        console.error('scenarioName is required!');
        return;
    }
    return JSON.parse(window.localStorage.getItem(getLSName(scenarioName, 'packages')) || '{}');
}

export const getPageSchema = async (scenarioName: string = 'unknown') => {
    const schema = await getProjectSchemaRemote(scenarioName)
    const pageSchema = schema.componentsTree?.[0];
    if (pageSchema) {
        return pageSchema;
    }
    return schema;
};
