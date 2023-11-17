import React, { useState } from "react";
import logo from "../../assets/images/DSlogo.png";
import { Typography } from "@material-tailwind/react";
import { ReactComponent as DashboardIcon } from "../../assets/images/dashboard-icon.svg";
import { ReactComponent as SalesIcon } from "../../assets/images/sales-icon.svg";
import { ReactComponent as UpIcon } from "../../assets/images/up.svg";
import { ReactComponent as SupportIcon } from "../../assets/images/support-icon.svg";
import { ReactComponent as ActivitiestIcon } from "../../assets/images/activities-icon.svg";
import { ReactComponent as ProductIcon } from "../../assets/images/products-icon.svg";
import { ReactComponent as DocumentsIcon } from "../../assets/images/documents-icon.svg";
import { ReactComponent as CalenderIcon } from "../../assets/images/calender-icon.svg";
import { ReactComponent as AiforecastIcon } from "../../assets/images/aiforecast-icon.svg";
import { ReactComponent as ReportsIcon } from "../../assets/images/reports-icon.svg";


const Sidebar = () => {
    const [isSalesDropdownOpen, setIsSalesDropdownOpen] = useState(false);
    const [isSupportDropdownOpen, setIsSupportDropdownOpen] = useState(false);

    const toggleSalesDropdown = () => {
        setIsSalesDropdownOpen(!isSalesDropdownOpen);
    };
    const toggleSupportDropdown = () => {
        setIsSupportDropdownOpen(!isSupportDropdownOpen);
    };
    const customBgStyle = {
        background: 'linear-gradient(90deg, rgba(217, 217, 217, 0.58) 0%, rgba(217, 217, 217, 0.00) 100%)',
    };

    const customTypographyClass =
        "ml-2 text-custom-dashgray leading-relaxed leading-cap font-open-sans text-22 font-semibold leading-4 opacity-50";
    return (
        <div className="flex-shrink-0 w-[280px] h-[1744px] bg-white justify-center items-center">
            <div className="flex-shrink-0 w-[280px] h-[75px] bg-custom-igray justify-center pt-4 pl-12">
                <img src={logo} alt="" className="w-[170px] h-[50px]" />
            </div>

            <div style={customBgStyle} className="flex items-center h-[45px] pl-12 mt-10 border-r-8 border-orange-200 bg-gradient-to-r from-transparent via-transparent to-orange-400">

                <DashboardIcon className="w-7 h-7 fill-current" />
                <Typography className={`${customTypographyClass} opacity-100`}>
                    Dashboard
                </Typography>

            </div>
            <div className="flex items-center pl-9 mt-2">
                <ul className="w-full space-y-2 mt-2">
                    <li
                        className="flex items-center p-2 relative cursor-pointer"
                        onClick={toggleSalesDropdown}
                    >
                        <SalesIcon className="w-7 h-7" />
                        <Typography className={customTypographyClass}>
                            Sales & Marketing
                        </Typography>
                        <div className="ml-2">
                            {isSalesDropdownOpen ? <UpIcon className="w-4 h-4 ml-5" /> : null}
                        </div>
                    </li>
                    {isSalesDropdownOpen && (
                        <ul className=" ml-10 pl-10">
                            <li className="flex mt-4">
                                <Typography className={customTypographyClass}>Leads</Typography>
                            </li>
                            <li className="flex  mt-4">
                                <Typography className={customTypographyClass}>
                                    Accounts
                                </Typography>
                            </li>
                            <li className="flex  mt-4">
                                <Typography className={customTypographyClass}>
                                    Contacts
                                </Typography>
                            </li>
                            <li className="flex  mt-4">
                                <Typography className={customTypographyClass}>
                                    Oppotunities
                                </Typography>
                            </li>
                            <li className="flex  mt-4">
                                <Typography className={customTypographyClass}>
                                    Quotes
                                </Typography>
                            </li>
                            <li className="flex mt-4">
                                <Typography className={customTypographyClass}>
                                    Campaigns
                                </Typography>
                            </li>
                        </ul>
                    )}
                    <li
                        className="flex items-center p-2 relative cursor-pointer"
                        onClick={toggleSupportDropdown}
                    >
                        <SupportIcon className="w-7 h-7" />
                        <Typography className={customTypographyClass}>Support</Typography>
                        <div className="pl-1 ml-12">
                            {isSupportDropdownOpen ? (
                                <UpIcon className="w-4 h-4 ml-12" />
                            ) : null}
                        </div>
                    </li>
                    {isSupportDropdownOpen && (
                        <ul className=" ml-10 pl-10">
                            <li className="flex mt-4">
                                <Typography className={customTypographyClass}>Cases</Typography>
                            </li>
                            <li className="flex  mt-4">
                                <Typography className={customTypographyClass}>
                                    Knowledge Base
                                </Typography>
                            </li>
                            <li className="flex  mt-4">
                                <Typography className={customTypographyClass}>
                                    Real Time Chat
                                </Typography>
                            </li>
                        </ul>
                    )}
                    <li className="flex items-center p-2">
                        <ActivitiestIcon className="w-7 h-7" />
                        <Typography className={customTypographyClass}>
                            Activities
                        </Typography>
                    </li>
                    <li className="flex items-center p-2">
                        <ProductIcon className="w-7 h-7" />
                        <Typography className={customTypographyClass}>Products</Typography>
                    </li>
                    <li className="flex items-center p-2">
                        <DocumentsIcon className="w-7 h-7" />
                        <Typography className={customTypographyClass}>Documents</Typography>
                    </li>
                    <li className="flex items-center p-2">
                        <CalenderIcon className="w-7 h-7" />
                        <Typography className={customTypographyClass}>Calender</Typography>
                    </li>
                    <li className="flex items-center p-2">
                        <AiforecastIcon className="w-7 h-7" />
                        <Typography className={customTypographyClass}>
                            AI Forecast
                        </Typography>
                    </li>
                    <li className="flex items-center p-2">
                        <ReportsIcon className="w-7 h-7" />
                        <Typography className={customTypographyClass}>Reports</Typography>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
