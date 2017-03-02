*   SETUP
    *   Create new dir and open in vs code
    *   add new file: a.ts with code
*   BUILD
    *   build the file using "Ctrl+Shit+B". You'll be prompted to add build config. Add it for Typescript watch mode from the options. VS Code will auto create tasks.json file in .vscode dir
    *   Again build using "Ctrl+Shit+B". This time build will prompt you to add tsconfig.json
    *   Create it and do Ctrl+Space inside the file to scaffold basic config. Add sourcemap and target to it and whatever else you want.
    *   Finally Build again.
*   RUN
    *   Create launch.json in .vscode dir and click on add config and add version and configuration attributes. Inside config attribute, ctrl+space and select node in intellisense
    *   Run using Ctrl+ F5 while a.ts is open.
    *   Debug by adding breakpoints in a.ts and using F5 to Launch Debugger.

**PS:** To hide js and map files from workspace, use workspace settings and add this to it: `{"files.exclude": {"**/*.{js,js.map}": true}}` 

**PPS:** To enable linting, install tslint: `npm install -g tslint.` Next install the tslint extension in vscode. Finally add tslint.json if you want custom rules _(Note that these override the default rules so better not do it)_ and add this to workspace settings `"tslint.autoFixOnSave": true, "tslint.rulesDirectory": "./tslint.json"`

ref:
* https://discventionstech.wordpress.com/2017/03/02/debug-typescript-project-using-vs-code/
* https://discventionstech.wordpress.com/2017/03/02/typescript-libraries/
* https://discventionstech.wordpress.com/2017/03/02/configure-tslint-for-typescript-projects/ 

