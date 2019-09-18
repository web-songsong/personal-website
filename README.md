# ams-ssr

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn  dev
```

### Compiles and minifies for production

```
yarn run start
```

预加载 asyncData 需要直接对应路由组件中加载

## 开发活动组件

### 步骤

1. 计入目录`src/components/activity/libs/`下， 增加组件文件夹

2. 在文件夹中创建 `index.vue` 以及 `property.json`

   > - `index.vue` 组件主文件
   > - `property.json` 组件配置文件， 重点属性 **`propsData`**, 进行组件数据格式

3. 配置 `libs.json` 文件， 在组件栏中展示。
