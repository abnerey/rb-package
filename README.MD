# rb-package

##Rebuild your package.json from your package-lock.json

Sometimes install dependencies in your from works only thanks to package-lock.json,
but if you don't keep congruency between package-lock.json and package.json you may
fall in trouble with your dependencies. For example, when you don't version your
package-lock and download the repository in other side where you don't have package-lock,
your project could fail in building  or other troubles.

This little package exposes and command you can execute to rebuid your package.json
with the dependencies version in your package-lock.json, generating a new file named
flat-package.json. Just run the next commands and use rb-package in your npm project 
and this tool will create the file just in that directory.

## 

```shell
npm install -g rb-package

cd .../route/to/your/project

rb-package
```