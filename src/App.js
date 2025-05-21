import {Routes, Route, Navigate} from 'react-router-dom'
import { useContext } from 'react';
import AuthContext from './store/authContext';
import './App.css';
import PopUpForm from './AdminPortal/Popup/PopUpForm'
import NewPromotionsPost from './AdminPortal/PromotionsPosts/NewPromotionsPost/NewPromotionsPost';
import EditPromotionsPost from './AdminPortal/PromotionsPosts/EditPromotionsPost/EditPromotionsPost';
import AdminHome from './AdminPortal/AdminHome/AdminHome';
import NewBlogPost from './AdminPortal/BlogPosts/NewBlogPost/NewBlogPost';
import LoginPage from './AdminPortal/LoginPage/LoginPage'
import EditBlogMain from './AdminPortal/BlogPosts/EditBlogPost/Main/EditBlogMain';
import EditSalesMain from './AdminPortal/SalesPosts/EditSalesPost/Main/EditSalesMain';
import SingleBlogEdit from './AdminPortal/BlogPosts/EditBlogPost/SingleBlogEdit';
import NewSalesPost from './AdminPortal/SalesPosts/NewSalesPost/NewSalesPost';
import SingleEditSalesPost from './AdminPortal/SalesPosts/EditSalesPost/SingleEditSalesPost'
import NewGalleryImg from './AdminPortal/HomeGallery/NewGalleryImg';
import DeleteGalleryImg from './AdminPortal/HomeGallery/DeleteGalleryImg';
import NewGallery2Img from './AdminPortal/HomeGallery2/NewGallery2Img';
import DeleteGallery2Img from './AdminPortal/HomeGallery2/DeleteGallery2Img';
import PreviewPost from './AdminPortal/BlogPosts/PreviewPost/PreviewPost';
import SinglePreviewEdit from './AdminPortal/BlogPosts/PreviewPost/SinglePreviewEdit';
import Header from './Header/Header';
import SingleEditPromotionsPost from './AdminPortal/PromotionsPosts/EditPromotionsPost/SingleEditPromoPost';





function App() {
  const authCtx = useContext(AuthContext);
  return (
    <div className="App">
        <Header />
      <Routes>


       <Route path='/popupform' element={authCtx.token ? <PopUpForm /> : <Navigate to='/login'/>}/>
        <Route path='/adminhome' element={authCtx.token ? <AdminHome /> : <Navigate to='/login'/>}/>
        <Route path='/newblogpost' element={authCtx.token ? <NewBlogPost /> : <Navigate to='/login'/>}/>
        <Route path='/editpost' element={authCtx.token ? <EditBlogMain/> : <Navigate to='/login'/>}/>
        <Route path='/previewblog' element={authCtx.token ? <PreviewPost /> : <Navigate to='/login'/>}/>
        <Route path='/editpreview/:id' element={authCtx.token ? <SinglePreviewEdit /> : <Navigate to='/login'/>}/>
        <Route path='editpost/singleblogedit/:id' element={authCtx.token ? <SingleBlogEdit /> : <Navigate to='/login'/>}/>
        <Route path='/newsalespost' element={authCtx.token ? <NewSalesPost /> : <Navigate to='/login'/>}/>
        <Route path='/newgalleryimg' element={authCtx.token ? <NewGalleryImg /> : <Navigate to='/login'/>}/>
        <Route path='/deletegalleryimg' element={authCtx.token ? <DeleteGalleryImg/> : <Navigate to='/login'/>}/>
        <Route path='/newgallery2img' element={authCtx.token ? <NewGallery2Img /> : <Navigate to='/login'/>}/>
        <Route path='/deletegallery2img' element={authCtx.token ? <DeleteGallery2Img/> : <Navigate to='/login'/>}/>
        <Route path='/editsalespost' element={authCtx.token ? <EditSalesMain/> : <Navigate to='/login'/>}/>
        <Route path='editsalespost/singlesaleedit/:id' element={authCtx.token ? <SingleEditSalesPost /> : <Navigate to='/login'/>}/>
        <Route path='/newpromotionspost' element={authCtx.token ? <NewPromotionsPost /> : <Navigate to='/login'/>}/>
        <Route path='editpromotionspost/singlepromotionsedit/:id' element={authCtx.token ? <SingleEditPromotionsPost /> : <Navigate to='/login'/>}/>
        <Route path='/editpromotionspost' element={authCtx.token ? <EditPromotionsPost /> : <Navigate to='/login'/>}/>
        <Route path='/' element={authCtx.token ? <Navigate to='/adminhome' /> : <LoginPage />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </div>
  );
}

export default App;
