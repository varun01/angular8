// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const host = 'https://reqres.in';
export const environment = {
  production: false,
  api:{
    searchEmployees: `${host}/api/users/2`,
    users: `${host}/api/users?page=2`,
    getExistingManagers: `${host}/assignment/get-existing-managers`,
    getDistricts: `${host}/get-districts`,
    getSubDistricts: `${host}/get-sub-districts`
  }

};



/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
