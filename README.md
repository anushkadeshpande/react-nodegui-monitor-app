![image](https://github.com/anushkadeshpande/react-nodegui-monitor-app/assets/53345232/e38c371a-291e-456b-aace-d4ccabe28c94)


```bash
npm install
# Run the dev server
npm run dev
# Open andother terminal and run the app
npm start
```

## Packaging app as a distributable

In order to distribute your finished app, you can use [@nodegui/packer](https://github.com/nodegui/packer)

### Step 1: (_**Run this command only once**_)

```sh
npx nodegui-packer --init MyAppName
```

This will produce the deploy directory containing the template. You can modify this to suite your needs. Like add icons, change the name, description and add other native features or dependencies. Make sure you commit this directory.

### Step 2: (_**Run this command every time you want to build a new distributable**_)

Next you can run the pack command:

```sh
npm run build
```

This will produce the js bundle along with assets inside the `./dist` directory

```sh
npx nodegui-packer --pack ./dist
```

This will build the distributable using @nodegui/packer based on your template. The output of the command is found under the build directory. You should gitignore the build directory.
