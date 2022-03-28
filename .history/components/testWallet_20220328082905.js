import Button from "./button"
export default function WalletError() {
    return (
        <div className="main">
            <p>Wallet</p>
            <p className="main__text">Connect with wallet or create a new one.</p>
            <Button text='Phantom' color="#000" background="#fff" width="100%"/>
            <style jsx>
                {`
                .main {
                    position: absolute;
                    left: 95%;
                    width: 20%;
                    top: 0;
                    height: auto;
                    padding: 30px 20px;
                    text-align: center;
                    border: 1px solid #c9c9c9;
                    border-top: none;
                    background-color: #fff;
                }
                .main__text {
                    margin: 30px 0;
                }

                `}
            </style>
        </div>
    )
}