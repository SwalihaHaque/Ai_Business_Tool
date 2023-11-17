import DataTable from 'react-data-table-component';
import ContactIcon from '../../assets/images/contact-icon.png';
//import Sidebar from './Sidebar.jsx';
import { columns, data } from './TableData.js'
import ContactForm from './ContactForm.js'



function FetchData() {
    return (
        <div className="contact-table-wrapper m-2 bg-[#F3F2F7] border">
            <div className="flex justify-between items-center p-4">
                <div className="nav-left">

                    <div className="flex ">
                        <div className='icon bg-[#C09A61] p-2 h-12 w-12 mr-2 mt-2'>
                            <img className={'w-8 h-9'} src={ContactIcon} alt='icon'></img>
                        </div>
                        <div className="heading">
                            <h3 className='text-[#636363] text-xl font-sans font-normal'>Contacts</h3>
                            <p className='text-[#636363] text-2xl font-sans font-bold '>All Contacts</p>
                        </div>
                    </div>
                </div>

                <div className="nav-right mt-4">
                    <button className={"bg-[#403B95] text-white px-2 py-1 border rounded font-bold text-base"} onClick={() => {
                        document.querySelector(".modal-wrapper").classList.add("active");
                    }}
                    >Create New Contact</button>
                </div>
            </div>

            <div>
                <DataTable
                    columns={columns}
                    data={data}
                    pagination
                />
            </div>

            <div className="modal-wrapper">
                <div className="modal text-center">
                    <div className="modal-header">
                        <p className={"text-gray-600 font-bold text-xl"}>All Contacts</p>
                    </div>
                    <div className="modal-body">
                        <ContactForm />
                    </div>
                    <div className="modal-footer">
                        <button
                            className={"bg-gray-300 text-dark font-bold py-2 px-4"}
                            onClick={() => {
                                document.querySelector(".modal-wrapper").classList.remove("active");
                            }
                            }>Close</button>
                        <button
                            className={"bg-green-500 font-bold py-2 px-4"}
                            onClick={() => {
                                document.querySelector(".modal-wrapper").classList.add("active");
                            }}>Save</button>
                    </div>
                </div>
            </div>

        </div>
    );
};
export default FetchData;
