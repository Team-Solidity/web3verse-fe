import React, {useState} from "react";
import Toggle from "../components/Toggle";

const Create = () => {
  const [toggled,setToggled]= useState(false);
  const [selectedImage, setSelectedImage] = useState();
  const [title, setTitle] = useState(" ")
  const [description, setdescription] = useState(" ")
  

  function handleChange(e) {
    setSelectedImage(URL.createObjectURL(e.target.files[0]))
  }

  function handleTitle(e) {
    setTitle(e.target.value)
  }

  function handleDescription(e) {
    setdescription(e.target.value)
  }

const handleSubmit = (event) => {
  event.preventDefault();
  setSelectedImage("")
  setTitle("")
  setdescription("")
  alert("Posted")
}
  return (
    <>
      <div className="overflow min-h-screen max-h-screen overflow-y-auto pt-24">
        <div className="bg-slate-100 text-black min-h-screen p-20">
          <form onSubmit={handleSubmit}>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" class="sr-only peer " />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-yellow-300 dark:peer-focus:ring-yellow-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-yellow-400"></div>
              <span className="ms-3 text-sm font-medium text-black ">Are You posting this as an NFT?</span>
            </label>
            <h1 className="m-2 text-3xl mb-2 mt-5">Title :</h1>
            <div className="flex rounded-full bg-[#0d1829] px-4 w-1/2">
              <input
                type="text"
                className="w-full h-16 bg-[#0d1829] text-2xl flex bg-transparent pl-2 text-[#cccccc] outline-0"
                placeholder="Title..."
                onChange={handleTitle}
                value={title}
              />
            </div>
            <h1 className=" ml-2 text-3xl mb-2 mt-5">Description :</h1>
            <div className="flex rounded-full bg-[#0d1829] px-4 w-1/2">
              <input
                type="text"
                value={description}
                className="w-full h-16 bg-[#0d1829] text-2xl flex bg-transparent pl-2 text-[#cccccc] outline-0"
                placeholder="Description..."
                onChange={handleDescription}
              />
            </div>
            <div className=" mb-2 mt-5">
              <div className="flex gap-5">
              <h1 className=" ml-2 text-3xl ">Upload :</h1>
              <input
                type="file"
                name="myImage"
                onChange={handleChange}
        className="mt-1 "
      />
      </div>
      {
        selectedImage ? <img width={450} height={450} src={selectedImage} /> : <div></div>
      }

            </div>
            <div className="ml-5 mt-5">
              <button className="bg-[#daa520] px-32 p-4 rounded-2xl text-2xl font-bold flex items-center text-gray-200"
                type="submit">
                Create Post
              </button>
            </div>
            

            </form>

        </div>
      </div>
    </>
  );
};

export default Create;

