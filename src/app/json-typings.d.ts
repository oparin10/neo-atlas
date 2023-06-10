//https://stackoverflow.com/questions/62823189/resolvejsonmodule-not-functioning-with-angular-10

declare module '*.json' {
  const value: any;
  export default value;
}
