import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import axios from 'axios';
import Swal from 'sweetalert2';

function SingleEditPromotionsPost() {
  const { id } = useParams();
  const [promotionsData, setPromotionsData] = useState([]);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    axios
      .get(`https://jericho-server-eb9k.onrender.com/promotions`)
      .then((res) => {
        setPromotionsData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const matchingObject = promotionsData.find(
    (item) => item.promotionstableid === +id
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
        `https://jericho-server-eb9k.onrender.com/editpromotionspost/${id}`,
        formData
      )
      .then(() => {
        Swal.fire({
          title: 'Promotion Edited Successfully',
          confirmButtonColor: 'rgb(210, 161, 12)',
          customClass: 'buttonalert',
          confirmButtonText: 'OK',
        });
      })
      .catch((err) => {
        console.error(err);
        Swal.fire({
          title: 'Error Editing Promotion',
          confirmButtonColor: 'orange',
          customClass: 'buttonalert',
          confirmButtonText: 'OK',
        });
      });
  };

  return (
    <div className="single_sale_item_edit">
      <h1>Edit Promotion Item {id}</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            placeholder={matchingObject?.name}
            value={formData.name || ''}
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
          Description
          <input
            type="text"
            name="description"
            placeholder={matchingObject?.description}
            value={formData.description || ''}
            onChange={handleChange}
          />
        </label>
        <label>
          Price
          <input
            type="text"
            name="price"
            placeholder={matchingObject?.price}
            value={formData.price || ''}
            onChange={handleChange}
          />
        </label>
        <label>
          Tagline
          <input
            type="text"
            name="tagline"
            placeholder={matchingObject?.tagline}
            value={formData.tagline || ''}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Submit Edit</button>
      </form>
    </div>
  );
}

export default SingleEditPromotionsPost;
