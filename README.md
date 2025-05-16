# Forge Hello World

This project is a Forge app written in JavaScript that displays `Hello World!` on a Jira project page.

For more details, documentation, and tutorials, check out [developer.atlassian.com/platform/forge/](https://developer.atlassian.com/platform/forge).

## Requirements

To get started, follow the [Set up Forge](https://developer.atlassian.com/platform/forge/set-up-forge/) guide.

## Quick Start

- Install dependencies:
  ```
  npm install --g @forge/cli@latest
  ```

- Update your app’s frontend by editing `src/frontend/index.jsx`.

- Update your app’s backend by editing `src/resolvers/index.js` to define resolver functions. See the [Forge resolvers documentation](https://developer.atlassian.com/platform/forge/runtime-reference/custom-ui-resolver/) for more info.

- Create your app:
  ```
  forge create
  ```
  1. Enter your agent’s name.
  2. Choose _Rovo_ → _Rovo Agent and action_ → _rovo-agent_.
  3. Wait for the confirmation:
    ```
    ✔ Created <app-name>

    Your app is ready to work on, deploy, and install. We created 3 environments you can deploy to: production, staging, development.

    Change to directory <app-name> to see your app files.
    ```

- Move into your new app’s directory:
  ```
  cd <app-name>
  ```

- Build and deploy your app:
  ```
  forge deploy
  ```

- Install your app on an Atlassian site:
  ```
  forge install
  ```
  1. Select the context for your agent (Jira, Confluence, Bitbucket, etc.).
  2. Enter your site name in the format: `your-domain.atlassian.net`.
  3. Type `Yes` and press Enter to continue.

- For local development, run:
  ```
  forge tunnel
  ```

### Notes

- Use `forge deploy` to save and push code changes.
- Use `forge install` to install the app on a new site.
- After the app is installed, any new deployments will be picked up automatically by the site—no need to reinstall.