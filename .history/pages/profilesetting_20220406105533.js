import Image from "next/image";
import { Formik, Form, useFormik } from "formik";
import { useSelector } from "react-redux";
import { profile } from "../reduser";
import Button from "../components/button";
import * as Yup from "yup";
const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});
export default function Profile() {
  const myprofile = useSelector(profile);

  const formik = useFormik({
    initialValues: {
      name: myprofile.name,
      email: myprofile.email,
      representaive_planet: myprofile.representative_planet,
      notification: [],
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="mainBlock">
      <h1>Profile Settings</h1>
      <Formik>
        <Form onSubmit={formik.handleSubmit}>
          <label>
            <h2>User Name</h2>
            <input
              type="text"
              name="name"
              value={formik.values.name}
              onChange={formik.getFieldProps("name").onChange}
            />
            {formik.errors.name && formik.touched.name ? (
              <div>{formik.errors.name}</div>
            ) : null}
          </label>
          <label>
            <h2>Email Address</h2>
            <input
              type="text"
              name="email"
              value={formik.values.email}
              onChange={formik.getFieldProps("name").onChange}
            />
            {formik.errors.email && formik.touched.email ? (
              <div className="error">{formik.errors.email}</div>
            ) : null}
          </label>
          <label>
            <h2>Representaive Planet</h2>
            <p>
              <input
                type="radio"
                name="representaive_planet"
                value="Genome NFT"
                checked={formik.values.representaive_planet === "Genome NFT"}
                onChange={formik.getFieldProps("value").onChange}
              />
              <span>
                <Image src="/icon_ba.svg" width={38} height={38} alt="icon" />
              </span>
              Genome NFT
            </p>
            <p>
              <input
                type="radio"
                name="representaive_planet"
                value="Geno`s Collection"
                checked={
                  formik.values.representaive_planet === "Geno`s Collection"
                }
                onChange={formik.getFieldProps("value").onChange}
              />
              <span>
                <Image src="/icon_ba.svg" width={38} height={38} alt="icon" />
              </span>
              Geno`s Collection
            </p>
            <p>
              <input
                type="radio"
                name="representaive_planet"
                checked={
                  formik.values.representaive_planet === "NYC Underground ..."
                }
                value="NYC Underground ..."
                onChange={formik.getFieldProps("value").onChange}
              />
              <span>
                <Image src="/icon_ba.svg" width={38} height={38} alt="icon" />
              </span>
              NYC Underground ...
            </p>
            <p>
              <input
                type="radio"
                name="representaive_planet"
                checked={formik.values.representaive_planet === "Genome Story"}
                value="Genome Story"
                onChange={formik.getFieldProps("value").onChange}
              />
              <span>
                <Image src="/icon_ba.svg" width={38} height={38} alt="icon" />
              </span>
              Genome Story
            </p>
          </label>
          <label>
            <h2>Notification Settings</h2>
            <p>
              <input
                type="checkbox"
                name="notification"
                onChange={formik.getFieldProps("Item Sold").onChange}
                value="Item Sold"
              />{" "}
              <b>Item Sold</b> When someone purchased one of your items
            </p>
            <p>
              <input
                type="checkbox"
                name="notification"
                checked={formik.values.notification.includes("Bid Activity")}
                onChange={formik.getFieldProps("Bid Activity").onChange}
                value="Bid Activity"
              />{" "}
              <b>Bid Activity</b> When someone bids on one of your items
            </p>
            <p>
              <input
                type="checkbox"
                onChange={formik.getFieldProps("Price Change").onChange}
                name="notification"
                value="Price Change"
              />{" "}
              <b>Price Change</b> When an item you made an offer on changes in
              price
            </p>
            <p>
              <input
                type="checkbox"
                onChange={formik.getFieldProps("Auction Expiration").onChange}
                name="notification"
                value="Auction Expiration"
              />{" "}
              <b>Auction Expiration</b> When a timed auction you created ends
            </p>
            <p>
              <input
                type="checkbox"
                name="notification"
                onChange={formik.getFieldProps("Successful Purchase").onChange}
                value="Successful Purchase"
              />{" "}
              <b>Successful Purchase</b> When an item you made an offer on
              changes in price
            </p>
            <p>
              <input
                type="checkbox"
                name="notification"
                onChange={formik.getFieldProps("GenoVerse Newsletter").onChange}
                value="GenoVerse Newsletter"
              />{" "}
              <b>GenoVerse Newsletter</b> When a timed auction you created ends
            </p>
          </label>
          <div className="buttons">
            <Button
              width="20%"
              type="cancel"
              color="#fff"
              background="#be0000"
              text="Cancel"
              background_hover="#8b0000"
            />
            <Button
              width="75%"
              type="submit"
              color="#000"
              background="#f3f3f3"
              text="Save"
              background_hover="#00b4e6"
              color_hover="#fff"
            />{" "}
          </div>
        </Form>
      </Formik>

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
        input[type="radio"],
        input[type="checkbox"] {
          width: 20px;
          height: 20px;
          vertical-align: middle;
        }
        input {
          width: 100%;
          height: 44px;
          font-size: 18px;
          border: 1px solid #c9c9c9;
          padding: 0 20px 0 20px;
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
        .buttons {
          display: flex;
          justify-content: space-between;
        }
        @media screen and (max-width: 550px) {
          .mainBlock {
           width: 94%;
           margin: 20px auto;
          }
          h1 {
            font-size: 24px;
          }
          label {
            margin-bottom: 35px;
          }
        }
      `}</style>
    </div>
  );
}
