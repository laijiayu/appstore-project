export type Application = {
  id: { attributes: { "im:id": string } }
  "im:image": { label: string }[]
  "im:name": { label: string }
  category: { attributes: { label: string } }
  summary?: { label: string }
  title?: { label: string }
  link?: { attributes: { href: string; rel: string } } | { attributes: { href: string; rel: string } }[]
}

export type Recommendation = {
  id: { attributes: { "im:id": string } }
  "im:image": { label: string }[]
  "im:name": { label: string }
  category: { attributes: { label: string } }
  link?: { attributes: { href: string; rel: string } } | { attributes: { href: string; rel: string } }[]
}
