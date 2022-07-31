import { faTaxi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import "./header.css";

export default function Header() {
  return (
    <div className='header'>
      <div className="headerList">
        <div className="headerListItem">
        <FontAwesomeIcon icon={faTaxi} />
        <span>stays</span>

        </div>
      </div>
    </div>
  )
}
