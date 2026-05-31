export const VALID_TOUR_SLUGS = [
  'kintamani-ubud',
  'gate-of-heaven',
  'ubud-instagram',
  'tanah-lot-sunset',
  'lovina-dolphin',
  'nusa-penida-west',
  'nusa-penida-ultimate',
  'nusa-penida-snorkeling',
  'nusa-penida-east',
  'mount-batur-jeep',
  'quad-bike-adventure',
  'batur-hot-spring',
  'waterfall-adventure',
] as const

export type ValidTourSlug = (typeof VALID_TOUR_SLUGS)[number]

export function isValidTourSlug(slug: string): slug is ValidTourSlug {
  return VALID_TOUR_SLUGS.includes(slug as ValidTourSlug)
}
