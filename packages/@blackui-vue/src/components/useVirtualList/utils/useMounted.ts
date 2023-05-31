import { getCurrentInstance, onMounted, ref } from 'vue'

/**
 * Mounted state in ref.
 *
 * @see https://vueuse.org/useMounted
 * @param options
 */
export function useMounted() {
  const isMounted = ref(false)

  if (getCurrentInstance()) {
    onMounted(() => {
      isMounted.value = true
    })
  }

  return isMounted
}