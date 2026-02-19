import { metadata as layoutMetadata } from '@/app/layout'

export function createPageMetadata(pageTitle: string, description?: string) {
  return {
    title: `${pageTitle} - ${layoutMetadata.title}`,
    description: description || `This is the ${pageTitle.toLowerCase()} page of ${layoutMetadata.title}`
  }
}