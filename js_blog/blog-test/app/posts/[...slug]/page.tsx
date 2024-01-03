import getAllMarkdownFiles from '@/lib/getAllMarkdownFiles'

export async function generateStaticParams() {
  
}

export default async function Page({
  params
}: {
  params: {slug: string[]}
})