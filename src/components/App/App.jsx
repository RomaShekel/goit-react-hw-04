// src/components/App.jsx
import SearchBar from "../SearchBar/SearchBar";
import { useState } from "react";
import searchPhotos from "../../servise-api"
import axios from "axios"
import { Toaster, toast } from 'react-hot-toast';
import ImageGallery from "../ImageGallery/ImageGallery";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Modal from 'react-modal';
import ImageModal from "../ImageModal/ImageModal";
import { useEffect } from "react";
import Loader from "../Loader/Loader";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";

Modal.setAppElement('#root');

export default function App() {

  const [topic, setTopic] = useState("")
  const [photos, setPhotos] = useState([])
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false)
  const [modalIsOpen, setIsOpen] = useState(false);
  const [dataForModal, setDataForModal] = useState({});
  const [page, setPage] = useState(1);

useEffect(() => {
  if(topic === '') {
    return;
  }

  const getPhotos = async () => {
    try {
      setLoader(true)
      setError(false)
      const data = await searchPhotos(topic, page);
      setPhotos((prevPhotos) => {
      return ([...prevPhotos, ...data]);
      })
    } catch (error) {
      setError(true)
    } finally {
      setLoader(false)
    }
  }
  getPhotos();
},
[topic, page])

const handleSearch = (newTopic) => {
  setTopic(newTopic);
  setPage(1);
  setPhotos([]);
};


const handlePage = () => {
  setPage(page + 1)
}

useEffect(()=>{
  document.body.style.backgroundColor = modalIsOpen ? 'black' : '#fff';
},[modalIsOpen])

  return (
    <div id="root">
      <SearchBar setTopic={handleSearch} toast={toast}/>
      {photos.length > 0 && <ImageGallery photosData={photos} setDataForModal={setDataForModal} setIsOpen={setIsOpen}/>}
      {photos.length > 0 && <LoadMoreBtn handlePage={handlePage} />}
      {error && <ErrorMessage/>}
      {loader && <Loader />}
      {modalIsOpen && <ImageModal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} data={dataForModal}/>}
      <div><Toaster/></div>
    </div>
  );

}