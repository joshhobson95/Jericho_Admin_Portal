import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './NewBlogPost.css'
import Swal from "sweetalert2";

import blog1 from '../../../Assets/blogexample/b1.jpg'
import blog2 from '../../../Assets/blogexample/b2.jpg'
import blog3 from '../../../Assets/blogexample/b3.jpg'
import blog4 from '../../../Assets/blogexample/b4.jpg'
import blog5 from '../../../Assets/blogexample/b5.jpg'
import blog6 from '../../../Assets/blogexample/b6.jpg'
import blog7 from '../../../Assets/blogexample/b7.jpg'
import blog8 from '../../../Assets/blogexample/b8.jpg'
import blog9 from '../../../Assets/blogexample/b9.jpg'
import blog10 from '../../../Assets/blogexample/b10.jpg'
import blog11 from '../../../Assets/blogexample/b11.jpg'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


const NewBlogPost = () => {
  const navigate = useNavigate()

  const [editorHtml, setEditorHtml] = useState('');

  const handleEditorChange = (html) => {
    setEditorHtml(html);
  };


  const [formData, setFormData] = useState({
    title: ``,
    title2: ``,
    date: ``,
    img_1_url: ``,
    img_2_url: ``,
    img_3_url: ``,
    img_3_href: ``,
    img_4_url: ``,
    img_5_url: ``,
    img_6_url: ``,
    img_7_url: ``,
    img_8_url: ``,
    img_9_url: ``,
    img_10_url: ``,
    img_1_captions: ``,
    img_2_captions:  ``,
    img_3_captions:   ``,
    img_4_captions:  ``,
    img_5_captions: ``,
    img_6_captions: ``,
    img_7_captions: ``,
    img_8_captions: ``,
    img_9_captions: ``,
    img_10_captions: ``,
    img_1_alt_text: ``,
    img_2_alt_text: ``,
    img_3_alt_text: ``, 
    img_4_alt_text: ``, 
    img_5_alt_text: ``, 
    img_6_alt_text: ``, 
    img_7_alt_text: ``, 
    img_8_alt_text: ``, 
    img_9_alt_text: ``, 
    img_10_alt_text: ``, 
    link:  ``,
    link2:  ``,
    icon:  ``,
    icon2: ``,
    icon3: ``,
    intro:  ``,
    body_1:  ``,
    body_2:  ``,
    body_3:  ``,
    body_4:  ``,
    conclusion:  ``,
    span_green:  ``,
    span_yellow:  ``,
    span_brown:  ``,
    tags: []
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("https://jericho-server-eb9k.onrender.com/postpreview", {
        ...formData,
    body_1: editorHtml
      })
      .then((response) => {
        Swal.fire({
          title: "Blog Preview Initiated",
          confirmButtonColor: "rgb(210, 161, 12)",
          customClass: "buttonalert",
          confirmButtonText: "Ok"
        })
        .finally(
          navigate('/previewblog')
        )
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          title: "Error creating post",
          confirmButtonColor: "orange",
          customClass: "buttonalert",
          confirmButtonText: "Ok"
        })
      });
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const toolbarOptions = [
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    ['link'],
    ['clean'] 
  ];

  return (
    <div className="newBlog">
<div className="newBlog_header">
<h1>Admin Portal</h1>
<h1>Create new Blog Post</h1>
</div>



<div className="side_by_side">
<div className="newBlog_model">

  <h1>Example Placement</h1>
  <span>*Adding Alt Text will help with SEO. If a type of plant, just list what the Plant is and add "in Albuqueruque" to the end</span>
  <img alt="" src={blog1}/>
  <img alt="" src={blog2}/>
  <img alt="" src={blog3}/>
  <img alt="" src={blog4}/>
  <img alt="" src={blog5}/>
  <img alt="" src={blog6}/>
  <img alt="" src={blog7}/>
  <p>Img 8 and Img 8 Caption must both be present to show</p>
  <img alt="" src={blog8} className="b8"/>
  <p>Img 9 and Img 9 Caption must both be present to show</p>
  <img alt="" src={blog9} className="b9"/>
  <img alt="" src={blog10}/>
  <img alt="" src={blog11}/>


</div>






<div className="newBlog_form">
    <form onSubmit={handleSubmit}>
      <label>
        Title
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          />
      </label>
      <label>
        Date
        <input
          type="text"
          name="date"
          value={formData.date}
          onChange={handleChange}
          />
      </label>
      <label>
        Image 1
        <input
          type="text"
          name="img_1_url"
          value={formData.img_1_url}
          onChange={handleChange}
          />
      </label>
      <label>
        Image 1 Caption
        <input
          type="text"
          name="img_1_captions"
          value={formData.img_1_captions}
          onChange={handleChange}
          />
      </label>
      <label>
        Image 1 Alt Text
        <input
          type="text"
          name="img_1_alt_text"
          value={formData.img_1_alt_text}
          onChange={handleChange}
          />
      </label>
      <label>
        Icon
        <input
          type="text"
          name="icon"
          value={formData.icon}
          onChange={handleChange}
          />
      </label>
      <label>
       Intro
        <textarea
          type="text"
          name="intro"
          value={formData.intro}
          onChange={handleChange}
          />
      </label>
      <label>
        Image 2
        <input
          type="text"
          name="img_2_url"
          value={formData.img_2_url}
          onChange={handleChange}
          />
      </label>
      <label>
        Image 2 Caption / Bold Title
        <input
          type="text"
          name="img_2_captions"
          value={formData.img_2_captions}
          onChange={handleChange}
          />
      </label>
      <label>
        Image 2 Alt Text
        <input
          type="text"
          name="img_2_alt_text"
          value={formData.img_2_alt_text}
          onChange={handleChange}
          />
      </label>
      <label>
     Yellow Text
        <input
          type="text"
          name="span_yellow"
          value={formData.span_yellow}
          onChange={handleChange}
          />
      </label>
      <label className="rich-text-editor">
      Body 1
        <ReactQuill
          value={editorHtml}
          onChange={handleEditorChange}
          modules={{
            toolbar: toolbarOptions,
          }}
        />
      </label>
      <label>
        Link
        <input
          type="text"
          name="link"
          value={formData.link}
          onChange={handleChange}
          />
      </label>
      <label>
        Title 2
        <input
          type="text"
          name="title2"
          value={formData.title2}
          onChange={handleChange}
          />
      </label>
      <label>
        Image 3
        <input
          type="text"
          name="img_3_url"
          value={formData.img_3_url}
          onChange={handleChange}
          />
      </label>
      <label>
        Image 3 HREF (link)
        <input
          type="text"
          name="img_3_href"
          value={formData.img_3_href}
          onChange={handleChange}
          />
      </label>
      <label>
        Image 3 Caption
        <input
          type="text"
          name="img_3_captions"
          value={formData.img_3_captions}
          onChange={handleChange}
          />
      </label>
      <label>
        Image 3 Alt Text
        <input
          type="text"
          name="img_3_alt_text"
          value={formData.img_3_alt_text}
          onChange={handleChange}
          />
      </label>
      <label>
        Image 4
        <input
          type="text"
          name="img_4_url"
          value={formData.img_4_url}
          onChange={handleChange}
          />
      </label>
      <label>
        Image 4 Caption / Bold Title
        <input
          type="text"
          name="img_4_captions"
          value={formData.img_4_captions}
          onChange={handleChange}
          />
      </label>
      <label>
        Image 4 Alt Text
        <input
          type="text"
          name="img_4_alt_text"
          value={formData.img_4_alt_text}
          onChange={handleChange}
          />
      </label>
      <label>
        Icon 2
        <input
          type="text"
          name="icon2"
          value={formData.icon2}
          onChange={handleChange}
          />
      </label>
      <label>
       Body 2
        <textarea
          type="text"
          name="body_2"
          value={formData.body_2}
          onChange={handleChange}
          />
      </label>
      <label>
     Green Text
        <input
          type="text"
          name="span_green"
          value={formData.span_green}
          onChange={handleChange}
          />
      </label>
      <label>
        Image 5
        <input
          type="text"
          name="img_5_url"
          value={formData.img_5_url}
          onChange={handleChange}
          />
      </label>
      <label>
        Image 5 Caption
        <input
          type="text"
          name="img_5_captions"
          value={formData.img_5_captions}
          onChange={handleChange}
          />
      </label>
      <label>
        Image 5 Alt Text
        <input
          type="text"
          name="img_5_alt_text"
          value={formData.img_5_alt_text}
          onChange={handleChange}
          />
      </label>
      <label>
       Body 3
        <textarea
          type="text"
          name="body_3"
          value={formData.body_3}
          onChange={handleChange}
          />
      </label>
      <label>
        Link 2
        <input
          type="text"
          name="link2"
          value={formData.link2}
          onChange={handleChange}
          />
      </label>
      <label>
        Image 6
        <input
          type="text"
          name="img_6_url"
          value={formData.img_6_url}
          onChange={handleChange}
          />
      </label> 
      <label>
        Image 6 Caption / Bold Title
        <input
          type="text"
          name="img_6_captions"
          value={formData.img_6_captions}
          onChange={handleChange}
          />
      </label>
      <label>
        Image 6 Alt Text
        <input
          type="text"
          name="img_6_alt_text"
          value={formData.img_6_alt_text}
          onChange={handleChange}
          />
      </label>
      <label>
        Image 7
        <input
          type="text"
          name="img_7_url"
          value={formData.img_7_url}
          onChange={handleChange}
          />
      </label>
      <label>
        Image 7 Caption
        <input
          type="text"
          name="img_7_captions"
          value={formData.img_7_captions}
          onChange={handleChange}
          />
      </label>
      <label>
        Image 7 Alt Text
        <input
          type="text"
          name="img_7_alt_text"
          value={formData.img_7_alt_text}
          onChange={handleChange}
          />
      </label>
      <label>
        Image 8
        <input
          type="text"
          name="img_8_url"
          value={formData.img_8_url}
          onChange={handleChange}
          />
      </label>
      <label>
        Image 8 Caption
        <input
          type="text"
          name="img_8_captions"
          value={formData.img_8_captions}
          onChange={handleChange}
          />
      </label>
      <label>
        Image 8 Alt Text
        <input
          type="text"
          name="img_8_alt_text"
          value={formData.img_8_alt_text}
          onChange={handleChange}
          />
      </label>
      <label>
        Image 9
        <input
          type="text"
          name="img_9_url"
          value={formData.img_9_url}
          onChange={handleChange}
          />
      </label>
      <label>
        Image 9 Caption
        <input
          type="text"
          name="img_9_captions"
          value={formData.img_9_captions}
          onChange={handleChange}
          />
      </label>
      <label>
        Image 9 Alt Text
        <input
          type="text"
          name="img_9_alt_text"
          value={formData.img_9_alt_text}
          onChange={handleChange}
          />
      </label>
      <label>
     Brown Text
        <input
          type="text"
          name="span_brown"
          value={formData.span_brown}
          onChange={handleChange}
          />
      </label>
      <label>
       Body 4
        <textarea
          type="text"
          name="body_4"
          value={formData.body_4}
          onChange={handleChange}
          />
      </label>
      <label>
        Icon 3
        <input
          type="text"
          name="icon3"
          value={formData.icon3}
          onChange={handleChange}
          />
      </label>
      <label>
        Image 10
        <input
          type="text"
          name="img_10_url"
          value={formData.img_10_url}
          onChange={handleChange}
          />
      </label>
      <label>
        Image 10 Caption
        <input
          type="text"
          name="img_10_captions"
          value={formData.img_10_captions}
          onChange={handleChange}
          />
      </label>
      <label>
        Image 10 Alt Text
        <input
          type="text"
          name="img_10_alt_text"
          value={formData.img_10_alt_text}
          onChange={handleChange}
          />
      </label>
      <label>
      Conclusion
        <textarea
          type="text"
          name="conclusion"
          value={formData.conclusion}
          onChange={handleChange}
          />
      </label>
      
      <label>
      Tags (Seperate Tags with comma)
        <input
          type="text"
          name="tags"
          value={formData.tags}
          onChange={(e) =>
            setFormData({
              ...formData,
              tags: e.target.value.split(",").map((tag) => tag.trim()),
            })
          }
          />
      </label>

      <button type="submit">Send to Preview</button>
    </form>
</div>
</div>



          </div>
  );
};

export default NewBlogPost;
