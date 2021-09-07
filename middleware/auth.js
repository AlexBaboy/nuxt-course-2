export default function ({store, redirect}) {
  console.log('store.getters.hasToken', store.getters.hasToken)
  if(!store.getters.hasToken) {
    redirect('/login?message=login')
  }
}
