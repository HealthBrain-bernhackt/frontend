import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.healthbrain.app',
  appName: 'healthbrain',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
