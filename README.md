# Template-client

Client template for CodeTeam42/Zadruga

## Built with

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Local Dev Setup

The app is set up with specific coding standards, based off of airbnb with modifications. Please follow instructions below to make use of the plugins and extensions for a uniform coding style.

1. Download IDE plugins/extensions
   1. **[ESLint](eslint.org)** - [VSCode extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
   2. **[Prettier](prettier.io)** - [VSCode extenstion](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
   3. **[EditorConfig](https://editorconfig.org/)** - [VSCode extension](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
2. Clone directory
   ```
   git clone git@github.com:code-team-42/template-client.git
   ```
3. Install dependencies
   ```
   npm install
   ```
4. Run it
   ```
   npm start
   ```

Other useful scripts:

```
// Run linter to view any warning or errors
npm run lint

// Automatically fix ESLint errors, if possible
npm run fix

// Run Prettier code formatter on changed files
npm run pretty-quick
```

## Deploying the App

See the information on how to deploy a React app in [README-CRA.md](README-CRA.md)

For deploying a full stack app using the template-server, view https://www.fullstackreact.com/articles/deploying-a-react-app-with-a-server/ for ideas of either combining the app to a single app, or for using two separate deployments - backend API server and frontend client.

## License

This project is licensed under the MIT License - see the [LICENSE](./license) for details
