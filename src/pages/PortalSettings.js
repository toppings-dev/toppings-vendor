import React, { useState, useEffect, useRef } from 'react';

import settingsDesign from '../assets/images/settings-design.PNG';
import locationIcon from '../assets/images/location-icon.svg';
import phoneIcon from '../assets/images/phone-icon.svg';
import clockIcon from '../assets/images/clock-icon.svg';

function PortalSettings(props) {
  const settingsNameInput = useRef();
  const settingsEmailInput = useRef();
  const settingsPhoneInput = useRef();
  const settingsBusinessNameInput = useRef();
  const settingsAddressInput = useRef();

  const [mode, changeMode] = useState("");
  const [vendor, setVendor] = useState({
    name: "The Krusty Krab",
    description: "The most popular restaurant in the Bikini Bottom and the home of the famous Krabby Patty!",
    tags: ["Fast Food", "Outdoor Dining"],
    address: "831 Bottom Feeder Lane, Bikini Bottom, Pacific Ocean 12403",
    contact: "Eugene H. Krabs",
    phoneNumber: "430-390-4092",
    email: "eugene.krabs@krustykrab.com",
    hours: {
      "Sunday": ["7:00 AM", "12:00 AM"],
      "Monday": ["7:00 AM", "2:00 AM"],
      "Tuesday": ["7:00 AM", "2:00 AM"],
      "Wednesday": ["7:00 AM", "2:00 AM"],
      "Thursday": ["7:00 AM", "2:00 AM"],
      "Friday": ["7:00 AM", "2:00 AM"],
      "Saturday": ["7:00 AM", "12:00 AM"],
    }
  });
  
  return (
    <article className="portal-settings-container">
      {/*<img src={settingsDesign} />*/}
      {/*<h3>Account Settings</h3>

      <label for="name">Name</label><input className="text-input" type="text" ref={settingsNameInput} />
      <label for="email">Email Address</label><input className="text-input" type="email" ref={settingsEmailInput} />
      <label for="phone">Phone Number</label><input className="text-input" type="tel" ref={settingsPhoneInput} />
      <label for="business-name">Business Name</label><input className="text-input" type="text" ref={settingsBusinessNameInput} />
      <label for="address">Business Address</label><input className="text-input" type="text" ref={settingsAddressInput} />
      <button>Edit</button>*/}
      {mode == "edit" ?
        <div className="portal-settings-form-container">
          <header>
            <span className="orange-heading">Edit Information</span>
          </header>

          <div className="content">
            <form className="portal-rewards-form">
              <div className="portal-rewards-form-name-section">
                <span className="subheading">Reward Name</span>
                <input className="text-input" type="text" placeholder="Krabby Patty Happy Hour" ref={settingsNameInput} />
              </div>
              
              <div className="portal-rewards-form-points-section">
                <span className="subheading">Point Value</span>
                <input className="text-input" type="text" placeholder="5" ref={settingsNameInput} />
              </div>
              
              <div className="portal-rewards-form-description-section">
                <span className="subheading">Reward Description</span>
                <textarea className="text-input" type="text" placeholder="10% discount on all Krabby Patties between 12PM and 3PM." ref={settingsNameInput} />
              </div>
            </form>
            
            <div className="portal-rewards-form-submit-section">
                <button className="orange-text" onClick={() => changeMode("")}>Cancel</button>
                <button className="orange">Add Reward</button>
              </div>
          </div>
        </div>
      :
        <div className="portal-vendor-info-container">
          <header>
            <span className="subheading">Toppings Vendor</span>
            <span className="orange-heading">{vendor.name}</span>
            <span className="caption">{vendor.description}</span>
            {vendor.tags.map((tag => 
              <button className="tag">{tag}</button>  
            ))}
          </header>

          <div className="content">
            <div className="vendor-info-sections-container">
              <div id="vendor-location-info-section" className="vendor-info-section">
                <img src={locationIcon} />
                <div>
                  <span className="subheading">Location</span>
                  <span>{vendor.address}</span>
                </div>
              </div>
              <div id="vendor-contact-info-section" className="vendor-info-section">
                <img src={phoneIcon} />
                <div>
                  <span className="subheading">Contact</span>
                  <div id="vendor-contact-info">
                    <span>Main Point of Contact:</span>
                    <span>{vendor.contact}</span>
                    <span>Phone Number</span>
                    <span>{vendor.phoneNumber}</span>
                    <span>Email Address</span>
                    <span>{vendor.email}</span>
                  </div>
                </div>
              </div>
              <div id="vendor-hours-info-section" className="vendor-info-section">
                <img src={clockIcon} />
                <div>
                  <span className="subheading">Hours</span>
                  <div id="vendor-hours-info">
                    {Object.keys(vendor.hours).map((day => 
                      <div>
                        <span>{day}:</span>
                        <span>{vendor.hours[day][0]} - {vendor.hours[day][1]}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div></div>
              <div id="vendor-info-button-section">
                <button className="orange" onClick={() => changeMode("edit")}>Edit Information</button>
              </div>
            </div>
          </div>
        </div>
      }
    </article>
  );
}

export default PortalSettings;
