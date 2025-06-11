import React, { useState } from "react";
import axios from "axios";
import './NewBulletinPost.css'
import Swal from "sweetalert2";







const NewBulletinPost = () => {



    const [bulletinFormData, setBulletinFormData] = useState({
        title: ``,
        img_url: ``,
        alt_text: ``,
        paragraph: ``,
        date: ``,
        link: ``
      });

      const handleSubmit = (event) => {
        event.preventDefault();
    
        axios
          .post("https://jericho-server-eb9k.onrender.com/newbulletinpost", bulletinFormData)
          .then((response) => {
            Swal.fire({
              title: "Bulletin Item Posted",
              confirmButtonColor: "rgb(210, 161, 12)",
              customClass: "buttonalert",
              confirmButtonText: "Ok"
            })
          })
          .catch((error) => {
            console.log(error);
            Swal.fire({
              title: "Error creating Bulletin item",
              confirmButtonColor: "orange",
              customClass: "buttonalert",
              confirmButtonText: "Ok"
            })
          });
      };

      const handleChange = (event) => {
        setBulletinFormData({
          ...bulletinFormData,
          [event.target.name]: event.target.value,
        });
      };
    



  return (
    <div className="create_promotion_item">

<div className="create_promotion_item_body">
    <form onSubmit={handleSubmit} className="promotion_item_form">
      <label>
        Title
        <input
          type="text"
          name="title"
          value={bulletinFormData.title}
          onChange={handleChange}
          />
      </label>
      <label>
        Image URL
        <input
          type="text"
          name="img_url"
          value={bulletinFormData.img_url}
          onChange={handleChange}
          />
      </label>
      <label>
        Alt Text
        <input
          type="text"
          name="alt_text"
          value={bulletinFormData.alt_text}
          onChange={handleChange}
          />
      </label>
      <label>
        Paragraph
        <input
          type="text"
          name="paragraph"
          value={bulletinFormData.paragraph}
          onChange={handleChange}
          />
      </label>
      <label>
        Date
        <input
          type="text"
          name="date"
          value={bulletinFormData.date}
          onChange={handleChange}
          />
      </label>
      <label>
        Link
        <input
          type="text"
          name="link"
          value={bulletinFormData.link}
          onChange={handleChange}
          />
      </label>
 

      <button type="submit">Send</button>
    </form>
</div>
</div>
  );
};

export default NewBulletinPost;
