// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

const URL_API = 'http://localhost:';
const PORT_API = '8080';
const PREFIX_API = '/api';

export const environment = {
  production: false,
  urlService: this.URL_API+this.PORT_API+this.PREFIX_API+'/auth/',
  urlServicesProduct:this.URL_API+this.PORT_API+this.PREFIX_API+'/product/',
  urlServicesSell:this.URL_API+this.PORT_API+this.PREFIX_API+'/sell/'
};
