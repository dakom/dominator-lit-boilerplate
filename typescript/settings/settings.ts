export const buildMode = process.env['NODE_ENV'];
export const buildVersion =  process.env['BUILD_VERSION'];
export const isProduction = buildMode === "production" ? true : false;
