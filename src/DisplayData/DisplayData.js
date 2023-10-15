import React from 'react'
import { useState } from 'react'
import './StyleData.css'

export default function DisplayData({ allEntry }) {

    return (
        <>
            <h4>Registered Users:</h4>
            {allEntry.length === 0 ?
                (<h4 className="NoUser">No Registered User</h4>) :
                (
                    < div className="tabledata">
                        <table>
                            <tr className="ui">
                                <th>Full Name</th>
                                <th>Email</th>
                                <th>Contact</th>
                                <th>Bio</th>
                                <th>DateTime</th>
                                
                            </tr>
                           
                            {
                                allEntry.map((item) => {
                                    return (
                                        <tr style={{ color: "black" }} key={item.id}>
                                            <td className="data">{item.fullname}</td>
                                            <td className="data">{item.email}</td>
                                            <td className="data">{item.contact}</td>
                                            <td className="data">{item.shortBio}</td>
                                            <td className="data">{item.id}</td>
                                            <hr />
                                        </tr>



                                    )
                                })
                            }
                        </table>
                    </div>
                )

            }
        </>
    )
}