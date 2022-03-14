export interface IErrorsModule {
  errors: any[];
  add: (error: any) => any;
  remove: (guid: string) => void;
}
