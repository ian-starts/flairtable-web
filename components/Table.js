import React from "react";
import SearchSvg from '../svgs/search-solid.svg'

export default (props) => {
    return (
        <div className="table-container">
            <div className={"table-searchbar"}>
                <span className="searchbar--icon">
                    <SearchSvg/>
                </span>
                <input className="searchbar--input" placeholder={"Search users"}/>
            </div>
            <div className="overflow-x-auto">
                <table>
                    <thead>
                    <tr className="header-row">
                        <th>Email</th>
                        <th>Created At</th>
                        <th>Last Signed In</th>
                        <th>UUID</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {props.data.map((data) => {
                        return (<tr className="table-row">
                            <td>{data.email}</td>
                            <td>{(new Date).toDateString()}</td>
                            <td>{(new Date).toDateString()}</td>
                            <td>{data.id}</td>
                            <td></td>
                        </tr>)
                    })}
                    </tbody>
                </table>
            </div>
            <style jsx>{`
              .table-searchbar{
                @apply bg-gray-200 p-1 flex flex-row rounded-t
              }
              .searchbar--icon{
                @apply w-4 h-4 flex self-center ml-6 mr-3
              }
              .searchbar--input{
                @apply bg-gray-200 p-2 w-full;
              }
              .table-container{
                @apply rounded-lg shadow;
              }
              .table-row{
                @apply border-b
              }
              .header-row{
                @apply border-b text-left bg-gray-200 shadow;
              }
              th{
                @apply font-normal p-4 px-6 text-sm text-gray-800
              }
              td {
                @apply truncate p-4 px-6 text-sm text-gray-800
              }
            `}</style>
        </div>
    )
}