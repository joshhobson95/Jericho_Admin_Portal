import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

function SingleEditBulletinPost() {
  const { id } = useParams();
  const [bulletinData, setBulletinData] = useState([]);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    axios
      .get(`https://jericho-server-eb9k.onrender.com/bulletin`)
      .then((res) => {
        setBulletinData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const matchingObject = bulletinData.find(
    (item) => item.bulletintableid === +id
  );

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(
        `https://jericho-server-eb9k.onrender.com/editbulletinpost/${id}`,
        formData
      )
      .then(() => {
        Swal.fire({
          title: 'Bulletin Edited Successfully',
          confirmButtonColor: 'rgb(210, 161, 12)',
          customClass: 'buttonalert',
          confirmButtonText: 'OK',
        });
      })
      .catch((err) => {
        console.error(err);
        Swal.fire({
          title: 'Error Editing Bulletin',
          confirmButtonColor: 'orange',
          customClass: 'buttonalert',
          confirmButtonText: 'OK',
        });
      });
  };

  return (
    <div className="single_sale_item_edit">
      <h1>Edit Bulletin Item {id}</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Title
          <input
            type="text"
            name="title"
            placeholder={matchingObject?.title}
            value={formData.title || ''}
            onChange={handleChange}
          />
        </label>
          <label>
        Image
        <input
          type="text"
          name="img_url"
          placeholder={matchingObject?.img_url}
          value={formData.img_url}
          onChange={handleChange}
          />
      </label>
        <label>
          Alt Tag
          <input
            type="text"
            name="alt text"
            placeholder={matchingObject?.alt_text}
            value={formData.alt_text || ''}
            onChange={handleChange}
          />
        </label>
        <label>
          Paragraph
          <input
            type="text"
            name="paragraph"
            placeholder={matchingObject?.paragraph}
            value={formData.paragraph || ''}
            onChange={handleChange}
          />
        </label>
        <label>
          Date
          <input
            type="text"
            name="date"
            placeholder={matchingObject?.date}
            value={formData.date || ''}
            onChange={handleChange}
          />
        </label>
        <label>
          Link
          <input
            type="text"
            name="link"
            placeholder={matchingObject?.link}
            value={formData.link || ''}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Submit Edit</button>
      </form>
    </div>
  );
}

export default SingleEditBulletinPost;
