// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDEbFJclZsmyeaYASSh5Hm68rOadFdH09o",
    authDomain: "firechat-bc6ab.firebaseapp.com",
    databaseURL: "https://firechat-bc6ab.firebaseio.com",
    projectId: "firechat-bc6ab",
    storageBucket: "firechat-bc6ab.appspot.com",
    messagingSenderId: "108596028279"
  }
};
