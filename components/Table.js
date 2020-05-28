import React from "react";
import SearchSvg from '../svgs/search-solid.svg'
import LeftSvg from '../svgs/chevron-left-solid.svg'
import RightSvg from '../svgs/chevron-right-solid.svg'
import TrashSvg from '../svgs/trash-alt-solid.svg'

export default (props) => {
    return (
        <div className="table-container">
            <div className={"table-searchbar"}>
                <span className="searchbar--icon">
                    <SearchSvg/>
                </span>
                <input className="searchbar--input" placeholder={"Search users"} onChange={(event) => {
                    props.onSearch(event.target.value)
                }}/>
            </div>
            <div className="overflow-x-scroll">
                <table className="w-full">
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
                        return (<tr className="table-row" key={data.id}>
                            <td>{data.email}</td>
                            <td>{(new Date).toDateString()}</td>
                            <td>{(new Date).toDateString()}</td>
                            <td>{data.id}</td>
                            <td className="actions-row">
                                <button className="table-row--actions"
                                    onClick={props.onDelete(data.firebaseId)}><TrashSvg/>
                                </button>
                            </td>
                        </tr>)
                    })}
                    </tbody>
                </table>
            </div>
            <div className={"table-footer"}>
                <span className={"footer--item-count"}>
                    {'1-' + props.data.length}
                </span>
                <button className="mx-3" onClick={props.previousFunction?.prevFunction}>
                    <div className="w-3 h-auto">
                        <LeftSvg/>
                    </div>
                </button>
                <button className="mx-3" onClick={props.nextFunction?.nextFunction}>
                    <div className="w-3 h-auto">
                        <RightSvg/>
                    </div>
                </button>
            </div>
            <style jsx>{`
              .table-searchbar{
                @apply bg-gray-200 p-1 flex flex-row rounded-t
              }
              .actions-row{
                @apply content-center;
                min-width: 4.5rem;
              }
              .table-footer{
                @apply flex flex-1 flex-row justify-end items-center py-2 px-4 font-sans text-gray-600 text-sm;
              }
              .searchbar--icon{
                @apply w-4 h-4 flex self-center ml-6 mr-3
              }
              .searchbar--input{
                @apply bg-gray-200 p-2 w-full;
              }
              .table-container{
                @apply rounded-lg shadow w-full;
              }
              .table-row{
                @apply border-b;
              }
              .table-row:hover{
                @apply bg-gray-200;
              }
              .table-row:hover .table-row--actions{
                @apply block;
              }
              .table-row--actions{
                @apply hidden;
              }
              .header-row{
                @apply border-b text-left bg-gray-200 shadow;
              }
              th{
                @apply font-normal p-4 px-6 text-sm text-gray-800
              }
              td {
                @apply truncate p-4 px-5 text-sm text-gray-800
              }
            `}</style>
        </div>
    )
}