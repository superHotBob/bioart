import { useRouter } from 'next/router'

const NFT = () => {
  const router = useRouter()
  const { pid } = router.query

  return (
    <div className='mainNft'>
      <div className='menu'>
        <p>.</p>
        <p>.</p>
        <p>.</p>
      </div>
   
      <style jsx>{`
      .mainNft {
        width: 70%;
        margin: 0 auto;
        height: 80vh;
      }
      .menu {
        width: 50px;
        height: 50px;
        border: 1px solid #ddd;
        border-radius: 5px;
        float: right;
        text-align: center;
      }
      .menu p {
        margin: 0
      }
    `}</style>
   </div>
  )}

export default NFT