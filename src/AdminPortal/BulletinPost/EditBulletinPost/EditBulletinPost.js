import React, { useState, useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import './EditBulletinPost.css';
import AuthContext from '../../../store/authContext';

function EditBulletinPost() {
  const [bulletinData, setBulletinData] = useState([]);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get("https://jericho-server-eb9k.onrender.com/bulletin")
      .then((res) => {
        setBulletinData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const deleteBulletinPost = (bulletinstableid) => {
    axios
      .delete(`https://jericho-server-eb9k.onrender.com/newbulletinpost/${bulletinstableid}`, {
        headers: {
          authorization: token,
        },
      })
      .then(() => {
        Swal.fire({
          title: "Bulletin Item has been Deleted",
          confirmButtonColor: "rgb(210, 161, 12)",
          customClass: "buttonalert",
          confirmButtonText: "OK",
        }).finally(() => window.location.reload(false));
      })
      .catch((err) => {
        console.log(err);
      });
  };




  return (
    <div className='edit_sales_item'>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Image</th>
            <th>Alt Text</th>
            <th>Paragraph</th>
            <th>Date</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {bulletinData.map((item) => (
            <tr key={item.bulletintableid}>
              <td>{item.bulletintableid}</td>
              <td>{item.title}</td>
              <td>{item.img_url}</td>
              <td>{item.alt_text}</td>
              <td>{item.paragraph}</td>
              <td>{item.date}</td>
              <td>{item.link}</td>
              <td>
                <NavLink to={`singlebulletinedit/${item.bulletintableid}`}>
                  <button>Edit</button>
                </NavLink>
              </td>
              <td>
                <button onClick={() => deleteBulletinPost(item.bulletintableid)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EditBulletinPost;
