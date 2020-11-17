import { objectType } from '@nexus/schema'

export const UserPayload = objectType({
  name: 'UserPayload',
  definition(t) {
    t.field('user', { type: 'users' })
    t.field('errors', { type: 'Errors' })
  },
})
