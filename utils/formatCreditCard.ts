import { ChangeEvent } from "react";

const formatCreditCardNumber = (e: ChangeEvent<HTMLInputElement>) => {
  let inputVal = e.target.value.replace(/\D/g, "");
  inputVal = inputVal.slice(0, 16);
  const formattedValue = inputVal.replace(/(\d{4})(?=\d)/g, "$1 ");
  e.target.value = formattedValue;
};

// Format the expiration date as MM / YY
const formatExpiryDate = (e: ChangeEvent<HTMLInputElement>) => {
  let inputVal = e.target.value.replace(/\D/g, ""); // Remove non-digits
  inputVal = inputVal.slice(0, 4); // Limit to 4 digits (MMYY)

  if (inputVal.length >= 3) {
    let month = inputVal.slice(0, 2);
    if (parseInt(month) > 12) {
      month = "12";
    }
    e.target.value = `${month} / ${inputVal.slice(2)}`; // MM/YY
  } else {
    e.target.value = inputVal; // Just output the digits as is if less than 3
  }
};

// Format the CVV input
const formatCvv = (e: ChangeEvent<HTMLInputElement>) => {
  let inputVal = e.target.value.replace(/\D/g, ""); // Remove non-digits
  inputVal = inputVal.slice(0, 4); // Limit to 4 digits
  e.target.value = inputVal; // Set the value
};

export { formatCreditCardNumber, formatExpiryDate, formatCvv };
