import { TinaNodeBackend, LocalBackendAuthProvider } from '@tinacms/datalayer'

const isLocal = process.env.TINA_PUBLIC_IS_LOCAL === 'true'

const handler = TinaNodeBackend({
  authProvider: isLocal
    ? LocalBackendAuthProvider()
    : undefined,
  databaseClient: null,
})

export { handler as GET, handler as POST }
