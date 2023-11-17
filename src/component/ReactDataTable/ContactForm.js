import React, { useState } from 'react';

const CreateNewContact = () => {
   const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      title: '',
      email: '',
      phone: '',
      mobile: '',
      accountName: '',
      contactOwner: '',
      department: '',
      reportsTo: '',
      mailingAddress: '',
      mailingStreets: '',
      mailingCity: '',
      zipCode: '',
      mailingState: '',
      mailingCountry: '',
   });

   const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
   };

   // Function to handle form submission
   const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formData);
   };

   return (
      <div className="mx-auto">

         <h2 className="bg-gray-200 text-center text-2xl font-normal mb-4 p-2">Create New Contact</h2>

         <form onSubmit={handleSubmit}>

            <h2 className="bg-gray-200 text-lg font-normal mb-4 p-1">Contact Information</h2>
            <div className="grid grid-cols-2 gap-4">

               <label>
                  First Name:
                  <input
                     type="text"
                     name="firstName"
                     value={formData.name}
                     onChange={handleInputChange}
                     placeholder="First Name"
                     className="border p-2"
                  />
               </label>

               <label>
                  Last Name:
                  <input
                     type="text"
                     name="lastName"
                     value={formData.lastName}
                     onChange={handleInputChange}
                     placeholder="Last Name"
                     className="border p-2"
                  />
               </label>
               <label>
                  Title:
                  <input
                     type="text"
                     name="title"
                     value={formData.title}
                     onChange={handleInputChange}
                     placeholder="Vp Sales"
                     className="border p-2"
                  />
               </label>
               <label>
                  Email:
                  <input
                     type="email"
                     name="email"
                     value={formData.email}
                     onChange={handleInputChange}
                     placeholder="youremail@gmail.com"
                     className="border p-2"
                  />
               </label>

               <label>
                  Phone:
                  <input
                     type="number"
                     name="phone"
                     value={formData.phone}
                     onChange={handleInputChange}
                     placeholder="00245684928"
                     className="border p-2"
                  />
               </label>

               <label>
                  Mobile:
                  <input
                     type="text"
                     name="mobile"
                     value={formData.mobile}
                     onChange={handleInputChange}
                     placeholder="01765403486"
                     className="border p-2"
                  />
               </label>

               <label>
                  Account Name:
                  <input
                     type="text"
                     name="accountName"
                     value={formData.accountName}
                     onChange={handleInputChange}
                     placeholder="Search account"
                     className="border p-2"
                  />
               </label>

               <label>
                  Contact Owner:
                  <input
                     type="text"
                     name="contactOwner"
                     value={formData.contactOwner}
                     onChange={handleInputChange}
                     placeholder="Emrajul Naim"
                     className="border p-2"
                  />
               </label>
            </div>

            {/* Additional Information */}
            <h2 className="bg-gray-200 text-lg font-normal mb-4 p-1">Additional Information</h2>
            <div className="grid grid-cols-2 gap-4">
               <input
                  type="text"
                  name="department"
                  value={formData.department}
                  onChange={handleInputChange}
                  placeholder="Department"
                  className="border p-2"
               />
               <input
                  type="text"
                  name="reportsTo"
                  value={formData.reportsTo}
                  onChange={handleInputChange}
                  placeholder="Reports To"
                  className="border p-2"
               />
            </div>

            {/* Address Information */}
            <h2 className="bg-gray-200 text-lg font-normal mb-4 p-1">Address Information</h2>
            <div className="grid grid-cols-2 gap-4">
               <div className="flex items-center">

                  <span className="icons mr-2">search</span>
                  <input
                     type="text"
                     name="mailingAddress"
                     value={formData.mailingAddress}
                     onChange={handleInputChange}
                     placeholder="Mailing Address"
                     className="border p-2"
                  />
               </div>
               <input
                  type="text"
                  name="mailingStreets"
                  value={formData.mailingStreets}
                  onChange={handleInputChange}
                  placeholder="Mailing Street"
                  className="border p-2"
               />
               <input
                  type="text"
                  name="mailingCity"
                  value={formData.mailingCity}
                  onChange={handleInputChange}
                  placeholder="Mailing City"
                  className="border p-2"
               />
               <input
                  type="number"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  placeholder=""
                  className="border p-2"
               />
               <input
                  type="text"
                  name="mailingState"
                  value={formData.mailingState}
                  onChange={handleInputChange}
                  placeholder="Dhaka"
                  className="border p-2"
               />
               <input
                  type="text"
                  name="mailingCountry"
                  value={formData.mailingCountry}
                  onChange={handleInputChange}
                  placeholder="Bangladesh"
                  className="border p-2"
               />
            </div>


            <button type="save" className="bg-blue-500 text-white px-4 p-2 rounded">
               Save
            </button>
         </form>
      </div>
   );
};

export default CreateNewContact;

