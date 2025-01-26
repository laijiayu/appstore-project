export type Application = {
  id: { attributes: { "im:id": string } }
  "im:image": { label: string }[]
  "im:name": { label: string }
  category: { attributes: { label: string } }
  summary?: { label: string }
  title?: { label: string }
}

export type Recommendation = {
  id: { attributes: { "im:id": string } }
  "im:image": { label: string }[]
  "im:name": { label: string }
  category: { attributes: { label: string } }
}
