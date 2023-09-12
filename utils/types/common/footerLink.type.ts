export interface IFooterLink {
  title: string
  links: {
    label: string
    url: string
    isNew?: boolean
  }[]
}
