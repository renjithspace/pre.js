# Pre.js
Pure JavaScript plugin for preserves spaces and line breaks


## Installation
**Bower**
```sh
bower install pre.js --save
```
**Direct download** from [latest releases](https://github.com/renjithvk/pre.js/releases)


## Usage
**Include**
```js
<script src="dist/js/pre.js"></script>
```
**Initialize**
```js
new Pre();
```

## Config
```js
new Pre({
    // Options here
    property: value,
    ...
});
```

## Options
| Property | Description                          | Available values          | Default value |
|----------|--------------------------------------|---------------------------|---------------|
| el       | Pre.js element                       | Element selector (string) | '.pre'        |
| spaces   | Enable/Disable spaces preserver      | true, false(boolean)      | false          |
| newlines  | Enable/Disable line breaks preserver | true, false (boolean)     | true          |
