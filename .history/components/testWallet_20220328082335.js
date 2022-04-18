import Button from "./button"
export default function WalletError() {
    return (
        <div className="main">
            <p>Wallet</p>
            <p>Connect with wallet or create a new one.</p>
            <Button text='Phantom' color="#000" background="#fff" />
            <style jsx>
                {`
                .main {
                    position: absolute;
                    left: 100%;
                    width: 20%;
                    top: 100px;
                    height: 300px;
                    padding: 30px 20px;
                    text-align: center;
                    border: 1px solid #c9c9c9;
                    border-top: none;
                    background-color: #fff;
                }

                `}
            </style>
        </div>
    )
}