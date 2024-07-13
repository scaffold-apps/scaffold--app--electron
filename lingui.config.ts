import type { LinguiConfig } from '@lingui/conf'

const config: LinguiConfig = {
  locales: ['en', 'es', 'fr'],
  catalogs: [
    {
      path: './src/renderer/src/locales/{locale}',
      include: ['src']
    }
  ],
  compileNamespace: 'es'
}

export default config
