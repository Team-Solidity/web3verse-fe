import React, {useState} from "react";
import { Info } from 'react-feather';


const Settings = () => {
  const [privateAccount, setPrivateAccount] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('en');  
  const toggleNotifications = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };

  const handleToggleDescription = () => {
    setShowDescription(!showDescription);
  };
  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };


  const handleToggle = () => {
    // Toggle the state of privateAccount when the toggle is clicked
    setPrivateAccount(!privateAccount);
  };

  return (
    <>
      <div className="overflow bg-black min-h-screen  max-h-screen overflow-y-auto pt-24">
        <div className=" v-screen  justify-center items-center">
        <div className=" justify-center items-center font-mono text-lg ml-72 mt-40">
      <div> 
       <div className=" flex ">    <div> <p className=" text-4xl text-white font-bold font-sans">Private account </p></div> <div className="info-icon text-white mt-3 ml-4 hover:cursor-pointer" onClick={handleToggleDescription}>
        <Info size={20} />
      </div> </div> 
            <div className="info-container text-white  ">
      <div>
      {showDescription && (
        <div className="description flex flex-col float-left mt-4">
          <p>When you make your account public, everyone can see your profile and posts.
        When you make your account private, only the followers you allow can view what you post, including images and videos, as well as your followers and following lists.</p>
        </div>
      )} </div>
    </div>
      </div>


      <div className=" text-white ml-3  mt-3">
        <label htmlFor="privateToggle"> </label>
        <input
          type="checkbox"
          id="privateToggle"
          checked={privateAccount}
          onChange={handleToggle}
        />
        <span className=" ml-4 mt-3">{privateAccount ? 'Private' : 'Public'}</span>
      </div>
      </div>

      <div className=" ml-72 mt-16 font-mono text-lg text-white">
      <h2 className="text-4xl font-bold mb-4 font-sans ">Notifications</h2>
      <div className="mb-4">
        <input
          type="checkbox"
          id="notificationsToggle"
          checked={notificationsEnabled}
          onChange={toggleNotifications}
          className="form-checkbox"
        />
                <label className=" ml-4" htmlFor="notificationsToggle">
          Enable Notifications:
        </label>
      </div>
      <div className="mt-4">
        <p className="text-lg">
          You have {notificationsEnabled ? 'enabled' : 'disabled'} notifications.
        </p>
      </div>
    </div>

   <div className=" text-white ml-72 mt-16 text-lg font-mono">
    <p className=" text-4xl font-bold mb-4 font-sans">  Language</p>
    <div className="mb-4">
        <label className="inline-block mr-2" htmlFor="languageSelect">
          Language Preference:
        </label>
        <select
          id="languageSelect"
          value={selectedLanguage}
          onChange={handleLanguageChange}
          className="border rounded px-2 py-1 text-black"
        >
          <option value="en">English</option>
          <option value="fr">French</option>
          <option value="es">Spanish</option>
          <option value="BR">Brazil</option>
          <option value="Hin">Hindi</option>

        </select>
      </div>
      <div className="mt-4 ">
        <p className="text-lg">
          Selected Language: {selectedLanguage.toUpperCase()}
        </p>
      </div></div>
      </div>
      </div>
    </>
  );
};

export default Settings;