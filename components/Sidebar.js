import React, {useState} from 'react';
import Link from "next/link";
import HomeSvg from "../svgs/home-solid.svg";
import KeySvg from "../svgs/key-solid.svg";
import LockSvg from "../svgs/lock-solid.svg"
import UsersSvg from "../svgs/users-solid.svg";

const Sidebar = (props) => {
    const [open, setOpen] = useState(false);
    return (<div>
            <button className={`open-menu-button${open ? ' open-menu-button__open' : ''}`}
                    onClick={(e) => setOpen(!open)}>
                <img src="assets/images/bars-solid.svg" alt="menubar" className="open-menu-button--image"/>
            </button>
            <aside className={`sidebar${open ? ' sidebar__open' : ''}`}>
                <Link href={'/console'}>
                    <a className="flex mt-3">
                        <div className="header--logo">
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
                    {/*<li className="sidebar-item">*/}
                    {/*    <Link href={'/console'}>*/}
                    {/*        <a className="flex flex-row">*/}
                    {/*            <div className="sidebar-item--icon">*/}
                    {/*                <LockSvg/>*/}
                    {/*            </div>*/}
                    {/*            <h1 className={"sidebar-item--title" + (props.active === 'permissions' ? ' sidebar-item--title--active' : '')}>Permissions</h1>*/}
                    {/*        </a>*/}
                    {/*    </Link>*/}
                    {/*</li>*/}
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
            </aside>
            <style jsx>{`
              .open-menu-button{
                @apply absolute top-0 left-0 mt-4 px-8;
                transition: margin-left .3s ease-out;
              }
              .open-menu-button__open{
                margin-left: 14rem;
              }
              .open-menu-button--image{
                @apply w-5 h-auto;
                fill: rgba(74,85,104,var(--text-opacity));
              }
              .sidebar {
                @apply flex flex-col h-screen;
                background: #17304b;
                width: 0;
                transform: translateX(-14rem);
                transition: transform .3s ease-out,-webkit-transform .3s ease-out, width .3s ease-out, margin-left .3s ease-out;
              }
              .sidebar__open{
                transform: none;
                width: 14rem;
              }
              .sidebar__closed{
                transform: none;
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
                @screen sm {
                   .sidebar {
                      @apply flex;
                      width: 14rem;
                      transform: none;
                   }
                   .open-menu-button{
                      @apply hidden;
                   }
                }
            `}</style>
        </div>
    )
};

export default Sidebar;