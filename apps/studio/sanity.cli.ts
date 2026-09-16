import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '60os6ewn',
    dataset: 'production',
  },
  deployment: {
    appId: 'qi3qdkj1lm3w7v0jm9twyelr',
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/studio/latest-version-of-sanity#k47faf43faf56
     */
    autoUpdates: true,
  },
})
