import React from 'react';
import Link from "next/link";
import HomeSvg from "../svgs/home-solid.svg";
import KeySvg from "../svgs/key-solid.svg";
import LockSvg from "../svgs/lock-solid.svg"
import UsersSvg from "../svgs/users-solid.svg";

const Sidebar = (props) => {
    return (
        <aside className="sidebar">
            <Link href={'/console'}>
                <a className="flex flex-1 mt-3">
                    <div
                        className="header--logo">
                        <img alt="logo" src="/assets/images/logo-flairtable.svg"/>
                    </div>
                    <h1 className="header--banner">Flairtable</h1>

                </a>
            </Link>
            <ul>
                <li className="sidebar-item">
                    <Link href={'/console'}>
                        <a className="flex flex-row">
                            <div className="sidebar-item--icon">
                                <HomeSvg/>
                            </div>
                            <h1 className={"sidebar-item--title" + (props.active === 'overview' ? ' sidebar-item--title--active' : '')}>Overview</h1>
                        </a>
                    </Link>
                </li>
                <li className="sidebar-item">
                    <Link href={'/auth'}>
                        <a className="flex flex-row">
                            <div className="sidebar-item--icon">
                                <UsersSvg/>
                            </div>
                            <h1 className={"sidebar-item--title" + (props.active === 'auth' ? ' sidebar-item--title--active' : '')}>Auth</h1>
                        </a>
                    </Link>
                </li>
                <li className="sidebar-item">
                    <Link href={'/console'}>
                        <a className="flex flex-row">
                            <div className="sidebar-item--icon">
                                <LockSvg/>
                            </div>
                            <h1 className={"sidebar-item--title" + (props.active === 'permissions' ? ' sidebar-item--title--active' : '')}>Permissions</h1>
                        </a>
                    </Link>
                </li>
                <li className="sidebar-item">
                    <Link href={'/keys'}>
                        <a className="flex flex-row">
                            <div className="sidebar-item--icon">
                                <KeySvg/>
                            </div>
                            <h1 className={"sidebar-item--title" + (props.active === 'keys' ? ' sidebar-item--title--active' : '')}>Keys</h1>
                        </a>
                    </Link>
                </li>
            </ul>
            <style jsx>{`
              .sidebar {
                @apply fixed h-screen;
                background: #17304b;
                width: 17rem;
              }
              .sidebar-item{
                @apply border-b my-5;
                border-color: #c3cee0;
              }
              .sidebar-item--icon{
                @apply self-center flex w-4 h-4 ml-3;
              }
              .sidebar-item--title{
                @apply font-bold text-lg pl-2 py-2;
                color: #c3cee0;
              }
              .sidebar-item--title--active{
                color: #579bd7;
              }
              .header--banner{
                @apply text-white px-5 py-5 font-bold self-center font-sans
                }
                .header--logo{
                @apply ml-3 self-center mr-1 py-2 flex w-16 h-16;
                }
            `}</style>
        </aside>
    )
};

export default Sidebar;