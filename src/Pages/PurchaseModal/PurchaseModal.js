import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const PurchaseModal = ({ sellerProduct }) => {
  console.log(sellerProduct);
  const { user } = useContext(AuthContext);

  const handlebooking = (event) => {
    event.preventDefault();

    const form = event.target;
    const userEmail = form.userEmail.value;
    const userName = form.userName.value;
    const productName = form.itemName.value;
    const productPrice = form.itemPrice.value;
    const userPhone = form.userPhone.value;
    const meetingLocation = form.meetingLocation.value;

    const booking = {
      userEmail,
      userName,
      productName,
      productPrice,
      userPhone,
      meetingLocation,
    };
  };

  return (
    <div>
      <input type="checkbox" id="purchase_modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="purchase_modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <form onSubmit={handlebooking} className="mt-6">
            <input
              name="userEmail"
              type="email"
              disabled
              defaultValue={user?.email}
              placeholder="User Email"
              className="input  input-primary w-full my-2"
            />
            <input
              name="userName"
              type="text"
              disabled
              defaultValue={user?.displayName}
              placeholder="User Name"
              className="input  input-primary w-full my-2"
            />
            <input
              name="itemName"
              type="text"
              disabled
              defaultValue={sellerProduct?.name}
              placeholder="Product Name"
              className="input  input-primary w-full my-2"
            />
            <input
              name="itemPrice"
              type="text"
              disabled
              defaultValue={sellerProduct?.resale_price}
              placeholder="Product Price"
              className="input  input-primary w-full my-2"
            />
            <input
              name="userPhone"
              type="text"
              placeholder="User Phone Number"
              className="input  input-primary w-full my-2"
            />
            <input
              name="meetingLocation"
              type="text"
              placeholder="Meeting Location"
              className="input  input-primary w-full my-2"
            />
            <br />
            <input
              className="flex justify-center w-full btn btn-accent  cursor-pointer  text-white p-2 rounded-lg"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default PurchaseModal;
