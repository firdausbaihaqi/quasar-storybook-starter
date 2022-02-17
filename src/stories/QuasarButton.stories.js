
export default {
  title: 'QuasarButton'
}

export const Components = () => ({
  title: 'Button',
  template: '<q-btn label="Button">',
  data() {
    return {
      name: null,
      role: 'User',
      options: ['Admin', 'Supervisor', 'User']
    }
  }
})