# npm-tool-version-check

Publish a tool, but want to warn users when you publish a new version.

By default, the tool will require using interaction on the commandline to continue using outdated software

Within your tool:

```typescript
import versionCheck from 'npm-tool-version-check';
const thisVersion = require('./package.json').version; // Update this to work for your package
const remoteJson = 'https://raw.githubusercontent.com/johndcarmichael/npm-tool-version-check/master/package.json'; // Update this URL to work for your package 
const packageName = 'npm-tool-version-check'; // Update this to your package name
versionCheck(thisVersion, remoteJson, packageName)
.then(() => {
  // continue with your tool
}).catch(() => {
  // log additional messaging
})
```

To bypass user interaction and only display the warning to the console, set the process env: `npm_tool_version_check__quite` to truthy.