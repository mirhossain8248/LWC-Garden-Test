import { GardenModule } from '../types'

export const MODULES: GardenModule[] = [{
  id: "c-helloWorld",
  href: "?module=c%2FhelloWorld",
  label: "helloWorld",
  category: "c",
  name: "c/helloWorld",
  argTypes: [{
    name: "label",
    type: "text",
  }],
  slotComponents: {
  },
  LWC: () => import('c/helloWorld'),
}]