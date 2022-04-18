import { useRouter } from 'next/router'

const NFT = () => {
  const router = useRouter()
  const { pid } = router.query

  return (
    <div className='mainNft'>
      <p>dsfsdjfgh</p>
   
      <style jsx>{`
      .mainNft {
        width: 70%;
        margin: 0 auto;
      }
    `}</style>
   </div>
  )}

export default NFT