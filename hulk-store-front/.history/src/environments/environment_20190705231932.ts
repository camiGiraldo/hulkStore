// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

let URL_API = 'http://localhost:';
let PORT_API = '8080';
let PREFIX_API = '/api'

export const environment = {
  production: false,
  urlService:URL_API+PORT_API+PREFIX_API+'/auth/',
  urlServicesProduct:URL_API+PORT_API+PREFIX_API+'/product/',
  urlServicesSell:URL_API+PORT_API+PREFIX_API+'/sell/'
};
