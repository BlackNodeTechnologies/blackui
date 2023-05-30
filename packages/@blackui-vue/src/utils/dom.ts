import { Ref, ComponentPublicInstance, ref as createRef } from 'vue'

export function dom<T extends Element | ComponentPublicInstance>(ref?: Ref<T | null>): T | null {
  if (ref == null) return null
  if (ref.value == null) return null

  const el = ((ref.value as { $el?: T }).$el ?? ref.value) as T | null
  if ((el as { $el?: T }).$el) return dom(createRef(el) as any)
  return el
}
