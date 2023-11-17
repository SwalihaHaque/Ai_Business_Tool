//  function Contact() {
//         const contactList = [
//                 {
//                     No: 1,
//                     Contact_Name: 'Ishtiaq Ahmed',
//                     account_Name: 'Company Name',
//                     title: 'CEO',
//                     phone: '123-456-7890',
//                     email: 'email@example.com',
//                     owner: 'Md Riyad',
//                 },
//                 {
//                     No: 2,
//                     Contact_Name: 'Ishtiaq Ahmed',
//                     account_Name: 'Company Name',
//                     title: 'CEO',
//                     phone: '123-456-7890',
//                     email: 'email@example.com',
//                     owner: 'Md Riyad',
//                 },
//                 {
//                     No: 3,
//                     Contact_Name: 'Ishtiaq Ahmed',
//                     account_Name: 'Company Name',
//                     title: 'CEO',
//                     phone: '123-456-7890',
//                     email: 'email@example.com',
//                     owner: 'Md Riyad',
//                 },
//                 {
//                     No: 4,
//                     Contact_Name: 'Ishtiaq Ahmed',
//                     account_Name: 'Company Name',
//                     title: 'CEO',
//                     phone: '123-456-7890',
//                     email: 'email@example.com',
//                     owner: 'Md Riyad',
//                 },
//                 {
//                     No: 5,
//                     Contact_Name: 'Ishtiaq Ahmed',
//                     account_Name: 'Company Name',
//                     title: 'CEO',
//                     phone: '123-456-7890',
//                     email: 'email@example.com',
//                     owner: 'Jane Smith',
//                 },
//         ];
//                 return (
//                     <div className="w-full overflow-hidden">
//                         <div className="flex bg-[#CECECE] text-white">
//                             <h3 className="">Contacts</h3>
//                             <h1>All Contacts</h1>
        
//                             <button className="flex justify-end">Create New Contact</button>
//                         </div>
        
//                         <table className="min-w-full bg-white">
//                             <thead>
//                                 <tr>
//                                     <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                                         Id
//                                     </th>
//                                     <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                                         Contact Name
//                                     </th>
//                                     <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                                         Account Name
//                                     </th>
//                                     <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                                         Title
//                                     </th>
//                                     <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                                         Phone
//                                     </th>
//                                     <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                                         Email
//                                     </th>
//                                     <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                                         Owner
//                                     </th>
//                                 </tr>
//                             </thead>
//                             <tbody className="bg-white">
//                                 {contactList.map((contact, index) => (
//                                     <tr key={contact.id} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
//                                         <td className="py-3 px-6">{index + 1}</td>
//                                         <td className="py-3 px-6">{contact.contactName}</td>
//                                         <td className="py-3 px-6">{contact.accountName}</td>
//                                         <td className="py-3 px-6">{contact.title}</td>
//                                         <td className="py-3 px-6">{contact.phone}</td>
//                                         <td className="py-3 px-6">{contact.email}</td>
//                                         <td className="py-3 px-6">{contact.owner}</td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     </div>
//                 );
//             };
        
//         export default Contact;