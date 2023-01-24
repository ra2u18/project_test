// @ts-check
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

/**
 * Don't be scared of the generics here.
 * All they do is to give us autocompletion when using this.
 *
 * @template {import('next').NextConfig} T
 * @param {T} config - A generic parameter that flows through to the return type
 * @constraint {{import('next').NextConfig}}
 */
function getConfig(config) {
  return config;
}

module.exports = getConfig({
  eslint: { ignoreDuringBuilds: !!process.env.CI },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
  },
});
