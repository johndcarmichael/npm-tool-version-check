# typescript-npm-package-tpl

Publish a tool, but want to warn users when you publish a new version.

Within your tool:

```typescript
import versionCheck from 'npm-tool-version-check';
const thisVersion = require('./package.json').version;
versionCheck(thisVersion, 'https://raw.githubusercontent.com/johndcarmichael/npm-tool-version-check/master/package.json')
.then(() => {
  // continue with your tool
}).catch(() => {
  // log additional messaging
})
```
