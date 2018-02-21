#! /usr/bin/env node
const fs = require('fs')
const path = require('path');
const directory = path.join(process.cwd());
const pkg = require(`${directory}/package.json`);
const pkgLock = require(`${directory}/package-lock.json`);

if (pkg && pkgLock) {
   let dependencies = {};
   let devDependencies = {};
   Object.keys(pkgLock.dependencies).forEach(key => {
      let dependency
      if (key in pkg.dependencies) {
         dependency = pkgLock.dependencies[key];
         dependencies[key] = `${dependency.version}`;
      } else if (key in pkg.devDependencies) {
         dependency = pkgLock.dependencies[key];
         devDependencies[key] = `${dependency.version}`;
      }
   });

   const flatPackage = Object.assign({}, pkg);
   flatPackage.dependencies = dependencies;
   flatPackage.devDependencies = devDependencies;

   fs.writeFile(`${directory}/flat-package.json`, JSON.stringify(flatPackage), (err) => {
      if (err) {
         console.log(err);
      } else {
         console.log("Package.json rebuild success, see flat-package.json.");
      }
   });
}
