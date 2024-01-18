import { defineStore } from 'pinia'
import { RoleState } from '@/types/role'

export const useRole = defineStore('role', {
  state: (): { ADMIN: RoleState } => ({
    ADMIN: {
      menuItems: [
        { label: 'Home', path: '/', icon: 'home' },
        { label: 'Manage Assets', path: '/asset', icon: 'balance' },
        { label: 'Settings', path: '/settings', icon: 'settings' },
      ],
    },
  }),
  getters: {
    getActiveRole(state: { ADMIN: RoleState }): RoleState {
      return state.ADMIN
    }
  },
})