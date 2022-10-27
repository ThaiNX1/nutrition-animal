const { codegen: generateService } = require('swagger-axios-codegen');

generateService({
  methodNameMode: 'operationId',
  // remoteUrl: 'http://10.20.4.157:4000/docs/json',
  remoteUrl: 'http://localhost:5005/docs/json',
  outputDir: './src/app/services',
  strictNullChecks: true,
  useCustomerRequestInstance: true,
  modelMode: 'class',
  extendDefinitionFile: './services/customerDefinition.ts',
  extendGenericType: ['JsonResult'],
  sharedServiceOptions: true,
  useStaticMethod: true,
  openApi: '3.0.0',
}).then(() => {
  // eslint-disable-next-line no-console
  console.log('OK');
});
