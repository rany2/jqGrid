One should install the latest version of the command-line TypeScript compiler as a Node.js package.
```
npm install -g typescript
```
One can compile the test `test.ts` using
```
tsc --sourcemap --target ES5 test.ts
```