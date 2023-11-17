import { LiaEditSolid, LiaTrashAltSolid } from "react-icons/lia";

export const columns = [
    {
        name: 'No',
        selector: row => row.id,
    },
    {
        name: 'Contact Name',
        selector: row => row.contactName,
    },
    {
        name: 'Account Name',
        selector: row => row.accountName,
    },
    {
        name: 'Title',
        selector: row => row.title,
    },
    {
        name: 'Phone',
        selector: row => row.phone,
    },
    {
        name: 'Mobile',
        selector: row => row.mobile,
    },
    {
        name: 'Email',
        selector: row => row.email,
    },
    {
            name: 'Owner',
            cell: row => <div className={"flex justify-between items-center"}>
                <p className={"mr-4"}>{row.owner}</p>
                <LiaEditSolid className={"text-gray-500 text-xl"}/>
                <LiaTrashAltSolid className={"text-red-400 text-xl"}/>
            </div>
      }
    
];

export const data = [
    {
        id: 1,
        contactName: 'Swaliha Haque',
        accountName: 'Company Name',
        title: 'President',
        phone: '022182432',
        mobile: '01765123456',
        email: 'test@test.com',
        owner: 'DataSoft',
    },
    {
        id: 2,
        contactName: 'Swaliha Haque',
        accountName: 'Company Name',
        title: 'President',
        phone: '022182432',
        mobile: '01765123456',
        email: 'test@test.com',
        owner: 'DataSoft',
    },
    {
        id: 3,
        contactName: 'Swaliha Haque',
        accountName: 'Company Name',
        title: 'President',
        phone: '022182432',
        mobile: '01765123456',
        email: 'test@test.com',
        owner: 'DataSoft',
    },
    {
        id: 4,
        contactName: 'Swaliha Haque',
        accountName: 'Company Name',
        title: 'President',
        phone: '022182432',
        mobile: '01765123456',
        email: 'test@test.com',
        owner: 'DataSoft',
    },
    {
        id: 5,
        contactName: 'Swaliha Haque',
        accountName: 'Company Name',
        title: 'President',
        phone: '022182432',
        mobile: '01765123456',
        email: 'test@test.com',
        owner: 'DataSoft',
    },
    {
        id: 6,
        contactName: 'Swaliha Haque',
        accountName: 'Company Name',
        title: 'President',
        phone: '022182432',
        mobile: '01765123456',
        email: 'test@test.com',
        owner: 'DataSoft',
    },
    {
        id: 7,
        contactName: 'Swaliha Haque',
        accountName: 'Company Name',
        title: 'President',
        phone: '022182432',
        mobile: '01765123456',
        email: 'test@test.com',
        owner: 'DataSoft',
    },
    {
        id: 8,
        contactName: 'Swaliha Haque',
        accountName: 'Company Name',
        title: 'President',
        phone: '022182432',
        mobile: '01765123456',
        email: 'test@test.com',
        owner: 'DataSoft',
    },
    {
        id: 9,
        contactName: 'Swaliha Haque',
        accountName: 'Company Name',
        title: 'President',
        phone: '022182432',
        mobile: '01765123456',
        email: 'test@test.com',
        owner: 'DataSoft',
    },
    {
        id: 10,
        contactName: 'Swaliha Haque',
        accountName: 'Company Name',
        title: 'President',
        phone: '022182432',
        mobile: '01765123456',
        email: 'test@test.com',
        owner: 'DataSoft',
    },
    {
        id: 11,
        contactName: 'Swaliha Haque',
        accountName: 'Company Name',
        title: 'President',
        phone: '022182432',
        mobile: '01765123456',
        email: 'test@test.com',
        owner: 'DataSoft',
    },
    {
        id: 12,
        contactName: 'Swaliha Haque',
        accountName: 'Company Name',
        title: 'President',
        phone: '022182432',
        mobile: '01765123456',
        email: 'test@test.com',
        owner: 'DataSoft',
    },
];
