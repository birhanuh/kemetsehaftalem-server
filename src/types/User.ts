import { objectType } from '@nexus/schema'

export const User = objectType({
  name: 'users',
  definition(t) {
    t.model.id()
    t.model.name()
    t.model.email()
    t.model.password()
    t.model.is_admin()
    t.model.orders({ pagination: false })
  },
})
