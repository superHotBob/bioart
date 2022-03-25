import Image from "next/image";
import { Formik, Field, Form } from "formik";
export default function Profile() {
    const formik = useFormik({
		initialValues={
            picked: "",
            checked: [],
            firstName: '',
            lastName: '',
            email: '',
        }
	})
  return (
    <div className="mainBlock">
      <h1>Profile Settings</h1>
     
          <Form>
            <label>
              <h2>User Name</h2>
              <input

               className="field" 
               type="text" name="name"
               onChange={formik.handleChange}
               value={formik.values.name}

              />
            </label>
            <label>
              <h2>Email Address</h2>
              <input

               type="text" value="email"
               onChange={formik.handleChange}
         value={formik.values.email}
         />
            </label>
            <label>
              <h2>Representaive Planet</h2>
              <p>
                <input
                 type="radio" style={{width: 20,height: 20}} name="picked" value="Genome NFT" />
                <span>
                  <Image src="/icon_ba.svg" width={38} height={38} alt="icon" />
                </span>
                Genome NFT
              </p>
              <p>
                <input
                 type="radio" styinpute={{width: 20,height: 20}} name="picked" value="Geno`s Collection" />
                <span>
                  <Image src="/icon_ba.svg" width={38} height={38} alt="icon" />
                </span>
                Geno`s Collection
              </p>
              <p>
                <input type="radio" style={{width: 20,height: 20}} name="picked" value="NYC Underground ..." />
                <span>
                  <Image src="/icon_ba.svg" width={38} height={38} alt="icon" />
                </span>
                NYC Underground ...
              </p>
              <p>
                <input
                 type="radio" style={{width: 20,height: 20}} name="picked" value="Genome Story" />
                <span>
                  <Image src="/icon_ba.svg" width={38} height={38} alt="icon" />
                </span>
                Genome Story
              </p>
            </label>
            <label>
              <h2>Notification Settings</h2>
              <p>
                <input type="checkbox" style={{width: 20,height: 20}} name="checked" value="Item Sold" />{" "}
                <b>Item Sold</b> When someone purchased one of your items
              </p>
              <p>
                <input type="checkbox" style={{width: 20,height: 20}} name="checked" value="Bid Activity" />{" "}
                <b>Bid Activity</b> When someone bids on one of your items
              </p>
              <p>
                <input type="checkbox" style={{width: 20,height: 20}} name="checked" value="Price Change" />{" "}
                <b>Price Change</b> When an item you made an offer on changes in
                price
              </p>
              <p>
                <input

                  type="checkbox"
                  style={{width: 20,height: 20}}
                  name="checked"
                  value="Auction Expiration"
                />{" "}
                <b>Auction Expiration</b> When a timed auction you created ends
              </p>
              <p>
                <input

                  type="checkbox"
                  name="checked"
                  style={{width: 20,height: 20}}
                  value="Successful Purchase"
                />{" "}
                <b>Successful Purchase</b> When an item you made an offer on
                changes in price
              </p>
              <p>
                <input
                  type="checkbox"
                  name="checked"
                  style={{width: 20,height: 20}}
                  value="GenoVerse Newsletter"
                />{" "}
                <b>GenoVerse Newsletter</b> When a timed auction you created
                ends
              </p>
            </label>
            <div className="buttons">
              <button className="cancel">Cancel</button>
              <button className="save">Save</button>
            </div>
          </Form>
      
     

      <style jsx>{`
        .mainBlock {
          width: 69%;
          margin: 80px auto;
        }
        h1 {
          font-size: 38px;
          font-family: "GmarketSansMedium";
          font-weight: 400;
          margin-bottom: 40px;
        }
        h2 {
          font-size: 22px;
          font-family: "GmarketSansMedium";
          margin-bottom: 20px;
        }
        input {
          margin-right: 30px;
          width: 20px;
          height: 20px;
          vertical-align: middle;
        }
        input {
          width: 100%;
          height: 44px;
          border: 1px solid #c9c9c9;
          padding: 0 20px 0 30px;
          border-radius: 20px;
        }
        label {
          margin-bottom: 100px;
          display: block;
        }
        p {
          font-size: 18px;
          font-family: "GmarketSansLight";
          font-weight: 800;
        }
        p b {
          font-family: "GmarketSansMedium";
          margin: 0 10px 0 20px;
        }
        span {
          display: inline-block;
          width: 38px;
          height: 38px;
          vertical-align: middle;
          margin: 0 10px 0 20px;
        }
        button {
          height: 44px;
          border: 1px solid #c9c9c9;
          color: #fff;
          font-size: 18px;
          background-color: #be0000;
          border-radius: 20px;
          width: 20%;
        }
        button:hover {
          background-color: #8b0000;
        }
        button.save {
          width: 78%;
          float: right;
          color: #000;
          background-color: #f3f3f3;
        }
        button.save:hover {
          background-color: #00b4e6;
          color: #fff;
        }
      `}</style>
    </div>
  );
}
