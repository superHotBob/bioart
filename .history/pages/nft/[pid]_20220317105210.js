import { useRouter } from 'next/router'

const NFT = () => {
  const router = useRouter()
  const { pid } = router.query

  return (
    <div>
      <p>dsfsdjfgh</p>
   
      <style jsx>{`
      p {
        color: red;
      }
    `}</style>
   </div>
  )}

export default NFT