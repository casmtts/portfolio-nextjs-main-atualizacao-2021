export const SECTION_IDS = {
  profile: 'profile',
  services: 'services',
  skills: 'skills',
  portfolio: 'portfolio',
  contact: 'contact',
} as const

export type SectionId = (typeof SECTION_IDS)[keyof typeof SECTION_IDS]

export function scrollToSection(sectionId: SectionId) {
  const element = document.getElementById(sectionId)
  element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
