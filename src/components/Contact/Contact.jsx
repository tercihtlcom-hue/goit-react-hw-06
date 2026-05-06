import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import css from "./Contact.module.css";

const Contact = ({ data: { id, name, number } }) => {
  const dispatch = useDispatch();

  return (
    <div className={css.container}>
      <div className={css.info}>
        <p><FaUser className={css.icon} /> {name}</p>
        <p><FaPhoneAlt className={css.icon} /> {number}</p>
      </div>
      <button className={css.btn} onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </div>
  );
};

export default Contact;