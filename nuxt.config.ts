import { resolve } from 'pathe'

export default defineNuxtConfig({
  alias: {
    images: resolve('./assets/images'),
    styles: resolve('./assets/styles')
  },
  compatibilityDate: '2025-05-15',
  app: {
    head: {
      htmlAttrs: {
        lang: 'ko'
      },
      title: 'UI/UX 개발 김수민 포트폴리오',
      viewport:
        'width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1',
      meta: [
        {
          name: 'description',
          content:
            'UI/UX 개발 김수민 포트폴리오'
        },
      ],
      script: [

      ]
    },
    baseURL : '/',
    buildAssetsDir: 'assets'
  },

  components: [
    {
      global: true,
      path: '~/components',
      pathPrefix: false
    },
  ],
  
  devtools: { enabled: false },

  modules: ['@nuxtjs/device', '@pinia/nuxt'],

  pinia: {
    storesDirs: ['./stores/**']
  },

  typescript: {
    strict: false
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @use "styles/common/variable" as *;
          @use "styles/common/mixin" as *;
        `,
          verbose: true,
          logger: {
            warn(message: string, options: any) {
              const { stderr } = process
              const span = options.span ?? undefined
              const stack =
                (options.stack === 'null' ? undefined : options.stack) ??
                undefined

              if (options.deprecation) {
                if (
                  message.startsWith(
                    'Using / for division outside of calc() is deprecated'
                  )
                )
                  return

                stderr.write('DEPRECATION ')
              }
              stderr.write(`WARNING: ${message}\n`)

              if (span !== undefined) stderr.write(`\n"${span.text}"\n`)

              if (stack !== undefined)
                stderr.write(
                  `    ${stack.toString().trimEnd().replace(/\n/gm, '\n    ')}\n`
                )

              stderr.write('\n')
            }
          }
        }
      }
    }
  },

  ssr: false, 
  nitro : {
    preset : 'github-pages' 
  }
})