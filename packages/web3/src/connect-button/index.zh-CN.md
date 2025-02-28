---
nav: 组件
group: 连接
order: 1
---

# ConnectButton 连接钱包按钮

连接区块链钱包的按钮。通常来说，你需要配合 [Connector](../connector/index.zh-CN.md) 组件使用。

> 注：**本文档中的示例仅仅是纯 UI 的示例**，在 Ant Design Web3 中。UI 模块和连接模块是分离的。要像真正的连接钱包，请参考[以太坊适配器](../wagmi/index.zh-CN.md)的文档，或阅读[适配器文档](../../../../docs/guide/adapter.zh-CN.md)了解更多。

## 基本使用

<code src="./demos/basic.tsx"></code>

## 展示提示

<code src="./demos/tooltip.tsx"></code>

## 可选择链

<code src="./demos/chains.tsx"></code>

## 展示菜单

<code src="./demos/menu.tsx"></code>

## 展示信息弹框

<code src="./demos/profileModal.tsx"></code>

## 头像

<code src="./demos/avatar.tsx"></code>

## 显示名称

<code src="./demos/name.tsx"></code>

## 不同类型的按钮

<code src="./demos/type.tsx"></code>

## 图标

<code src="./demos/icon.tsx"></code>

## 余额

<code src="./demos/balance.tsx"></code>

## API

| 属性 | 描述 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| account | 当前连接账号 | `Account` | - | - |
| tooltip | 鼠标移入地址时展示提示 | `boolean \|` [ConnectButtonTooltipProps](#connectbuttontooltipprops) | `false` | - |
| actionsMenu | 配置菜单项 | `boolean \|` [ActionsMenu](#actionsmenu) | - | - |
| profileModal | 配置信息弹框 | `boolean \|` [ProfileModal](#profilemodal) | - | - |
| avatar | 配置头像，用于在个人信息弹框中展示用户头像 | [AvatarProps](https://ant.design/components/avatar-cn#api) | - | - |
| onMenuItemClick | 菜单项点击事件 | `(e: NonNullable<MenuProps['items']>[number]) => void` | - | - |
| balance | 余额 | [Balance](#balance) | - | - |
| availableChains | 可以连接的链列表 | [Chain](../types/index.zh-CN.md#chain)\[] | - | - |
| locale | 多语言设置 | `Locale["ConnectButton"]` | - | - |

### Balance

| 属性     | 描述     | 类型               | 默认值 | 版本 |
| -------- | -------- | ------------------ | ------ | ---- |
| value    | 余额     | `bigint \| number` | -      | -    |
| symbol   | 代币符号 | `string`           | -      | -    |
| decimals | 代币精度 | `number`           | -      | -    |

### ConnectButtonTooltipProps

| 属性     | 描述           | 类型                                              | 默认值 | 版本 |
| -------- | -------------- | ------------------------------------------------- | ------ | ---- |
| copyable | 是否可复制     | `boolean`                                         | -      | -    |
| title    | 展示内容       | `boolean \| string \| React.ReactNode`            | -      | -    |
| format   | 格式化展示内容 | `boolean \| (address: string) => React.ReactNode` | -      | -    |

更多属性继承自 Ant Design 的 Tooltip 组件，你可以查看[组件文档](https://ant.design/components/tooltip-cn#api)了解更多。

### ActionsMenu

| 属性       | 描述     | 类型             | 默认值 | 版本 |
| ---------- | -------- | ---------------- | ------ | ---- |
| extraItems | 额外菜单 | `MenuItemType[]` | -      | -    |

更多属性继承自 Ant Design 的 Menu 组件，你可以查看[组件文档](https://ant.design/components/menu-cn#api)了解更多。

### ProfileModal

`ProfileModal` 属性继承自 Ant Design 的 Modal 组件，你可以查看[组件文档](https://ant.design/components/modal-cn#api)了解更多。
