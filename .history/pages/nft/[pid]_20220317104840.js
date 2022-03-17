import { useRouter } from 'next/router'

const NFT = () => {
  const router = useRouter()
  const { pid } = router.query

  return <p>Post: {pid}</p>
}

export default NFT