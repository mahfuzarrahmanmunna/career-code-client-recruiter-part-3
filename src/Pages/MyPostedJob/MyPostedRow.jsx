import React from 'react';
import { BsEye } from 'react-icons/bs';
import { Link } from 'react-router';

const MyPostedRow = ({ index, item }) => {
    console.log(item);
    return (
        <tr className="hover:bg-base-300">
            <th>{index + 1}</th>
            <td>{item?.title}</td>
            <td>{item?.deadline}</td>
            <td>0</td>
            <td className='text-center'>
                <Link to={`/applications/${item?._id}`} className='text-center'>
                    <BsEye size={20} />
                </Link>
            </td>
        </tr>
    );
};

export default MyPostedRow;