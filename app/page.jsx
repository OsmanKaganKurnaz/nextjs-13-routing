import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Link href={'/about-us'}>About Us</Link>
      <br/>
      <Link href={{
        pathname: 'docs/post-1'
      }}>Post-1</Link>
    </div>
  )
}
