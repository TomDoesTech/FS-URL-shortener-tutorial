import { object, string } from "yup";

export default object({
  body: object({
    destination: string()
      .url("Must be a valid URL")
      .required("Destination is required"),
  }),
});
