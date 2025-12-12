import { NativeToast as Toast } from './NativeToast'

export const CustomToast = () => {
  // On web, always render the toast
  return <Toast />
}
